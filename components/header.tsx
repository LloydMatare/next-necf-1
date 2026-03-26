import Navbar from "@/components/navbar";

export default function Header() {
  // Backwards-compatible export for any old imports; the app uses Navbar as the site header.
  return <Navbar />;
}

