import type { LinksFunction } from "@remix-run/server-runtime";
import stylesURL from "~/styles/gallery.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesURL }];
};

export default function GalleryIndexRoute() {
  return (
    <div>
      <div className="picture-placeholder">Placeholder</div>
    </div>
  );
}
