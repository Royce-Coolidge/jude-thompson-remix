import type { LinksFunction } from "@remix-run/server-runtime";
import stylesURL from "~/styles/gallery.css";
import elephant from "~/assets/elephant.png";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesURL }];
};

export default function GalleryIndexRoute() {
  return (
    <div className="w-full">
      <div className="picture-placeholder">
        <img alt={"Elephant"} src={elephant} />
      </div>
    </div>
  );
}
