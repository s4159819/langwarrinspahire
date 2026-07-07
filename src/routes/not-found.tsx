import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — Langwarrin Spa Hire</title>
      </Helmet>
      <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-2 text-4xl font-bold text-navy">Page not found</h1>
          <p className="mt-3 text-slate-ink">
            Looks like this page drifted away on the tide. Let's get you back.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center rounded-full bg-navy px-5 py-3 font-semibold text-primary-foreground hover:bg-navy/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
