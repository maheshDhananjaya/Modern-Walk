import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-2">404 – Page Not Found</h1>
      <p className="text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="mt-6 text-primary hover:underline">
        Go back home
      </Link>
    </div>
  );
}
