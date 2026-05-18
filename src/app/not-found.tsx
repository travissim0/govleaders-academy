import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold font-heading font-bold text-lg mb-2">404</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
