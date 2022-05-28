import { Outlet } from "@remix-run/react";

export default function GalleryRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Judy Thompson's Online Art Gallery</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
