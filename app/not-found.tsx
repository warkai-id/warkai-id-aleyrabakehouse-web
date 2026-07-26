import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center section-padding bg-warm-white">
      <div className="section-container text-center flex flex-col items-center">
        <h1 className="font-heading text-6xl md:text-8xl text-cherry-red mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl text-cocoa-brown mb-6">Oops! We couldn&apos;t find that page.</h2>
        <p className="font-body text-lg text-cocoa-brown/80 mb-10 max-w-md mx-auto">
          It looks like the page you are looking for has gone missing or doesn&apos;t exist. Let&apos;s get you back to the delicious stuff.
        </p>
        <Link href="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
