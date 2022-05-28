import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Judt Thompson Art</h1>
      <Link to="gallery"> Explore </Link>
    </div>
  );
}
