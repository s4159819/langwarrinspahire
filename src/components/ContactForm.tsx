import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

// Enquiries are forwarded straight to the owner's inbox via FormSubmit (no backend).
// First submission triggers a one-time confirmation email to the recipient below.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/jaydenjrobinson@icloud.com";

type FormState = {
  name: string; email: string; mobile: string; suburb: string; spa: string; message: string;
};

const initial: FormState = { name: "", email: "", mobile: "", suburb: "", spa: "", message: "" };

const SPA_OPTIONS = [
  "6–8 Seater Rectangular Spa",
  "6–8 Seater Octagonal Spa",
  "8–10 Seater Spa — Marbled Light Blue",
  "8–10 Seater Spa — Marbled Blue",
  "12 Seater Spa",
  "Not Sure",
];


export function ContactForm() {
  const [f, setF] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!f.name.trim()) e.name = "Please enter your name";
    if (!f.email.trim()) e.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email";
    if (!f.mobile.trim()) e.mobile = "Please enter your mobile";
    if (!f.suburb.trim()) e.suburb = "Please enter your suburb";
    if (!f.spa) e.spa = "Please select a spa size";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setBusy(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
          _subject: `Spa hire enquiry — ${f.name}`,
          _template: "table",
          _captcha: "false",
          _cc: "info@langwarrinspahire.com.au",
          Name: f.name,
          Email: f.email,
          Mobile: f.mobile,
          Suburb: f.suburb,
          "Spa size": f.spa,
          Message: f.message || "(none)",
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent(true);
      setF(initial);
    } catch {
      // Fallback: open the visitor's email client so the enquiry still gets through
      const body = encodeURIComponent(
        `Name: ${f.name}\nEmail: ${f.email}\nMobile: ${f.mobile}\nSuburb: ${f.suburb}\nSpa size: ${f.spa}\n\nMessage:\n${f.message || "(none)"}\n`,
      );
      const subject = encodeURIComponent(`Spa hire enquiry — ${f.name}`);
      window.location.href = `mailto:jaydenjrobinson@icloud.com?cc=info@langwarrinspahire.com.au&subject=${subject}&body=${body}`;
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-leaf mx-auto" />
        <h3 className="mt-4 text-2xl font-semibold text-navy">Enquiry sent — thanks!</h3>
        <p className="mt-2 text-slate-ink">
          We've received your enquiry and will be in touch shortly. Prefer to lock in a booking now? Give us a
          call — <a href="tel:0447775332" className="text-spa font-semibold">0447 775 332</a>.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-medium hover:bg-muted"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-input bg-white px-4 py-3 text-navy placeholder:text-slate-ink/60 focus:outline-none focus:ring-2 focus:ring-spa focus:border-spa transition";

  const label = "block text-sm font-medium text-navy mb-1.5";
  const errCls = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name<span className="text-destructive">*</span></label>
          <input id="name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email<span className="text-destructive">*</span></label>
          <input id="email" type="email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="mobile" className={label}>Mobile<span className="text-destructive">*</span></label>
          <input id="mobile" type="tel" className={field} value={f.mobile} onChange={(e) => setF({ ...f, mobile: e.target.value })} />
          {errors.mobile && <p className={errCls}>{errors.mobile}</p>}
        </div>
        <div>
          <label htmlFor="suburb" className={label}>Suburb<span className="text-destructive">*</span></label>
          <input id="suburb" className={field} value={f.suburb} onChange={(e) => setF({ ...f, suburb: e.target.value })} />
          {errors.suburb && <p className={errCls}>{errors.suburb}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="spa" className={label}>Spa size<span className="text-destructive">*</span></label>
          <select id="spa" className={field} value={f.spa} onChange={(e) => setF({ ...f, spa: e.target.value })}>
            <option value="">Select a spa size…</option>
            {SPA_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.spa && <p className={errCls}>{errors.spa}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className={label}>Message</label>
          <textarea id="message" rows={4} className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        </div>
      </div>
      <button
        type="submit"
        disabled={busy}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy text-primary-foreground px-6 py-3 font-semibold hover:bg-navy/90 disabled:opacity-60 transition"
      >
        <Send className="h-4 w-4" />
        {busy ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="mt-3 text-xs text-slate-ink">
        Reminder: bookings are only confirmed by phone — call <a href="tel:0447775332" className="text-spa font-semibold">0447 775 332</a>.
      </p>
    </form>
  );
}
