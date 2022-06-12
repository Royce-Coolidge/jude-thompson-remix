import { Outlet } from "@remix-run/react";

export default function GalleryRoute() {
  return (
    <div>
      <h1>Welcome to Judy Thompson's Online Art Gallery</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
