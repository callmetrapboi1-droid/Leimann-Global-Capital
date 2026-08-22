import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center text-[#1A1918]">
      <div className="w-12 h-12 bg-[#361418] text-white flex items-center justify-center text-xl font-serif mb-6 shadow-md">
        L
      </div>
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <h2 className="text-xl font-serif mb-4 text-[#483F3A]">Page Not Found</h2>
      <p className="text-sm text-neutral-600 max-w-md mb-8 font-light">
        The requested mandate or asset page could not be located. Please return to our main portal.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 bg-[#361418] text-white text-xs uppercase tracking-widest hover:bg-[#481E23] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
