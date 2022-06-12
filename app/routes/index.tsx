import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="inset-0  text-center min-h-full px-4 py-auto sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <h1 className="text-xl text-red-400 border-red-500">
        Welcome to Judy's Thompson Art
      </h1>
      <Link to="gallery"> Explore </Link>
    </div>
  );
}
