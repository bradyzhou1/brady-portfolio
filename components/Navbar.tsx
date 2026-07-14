import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbarInner">
        <Link href="/" className="siteName">
          Brady Zhou
        </Link>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="/#about">About</a>
          <a href="/#research">ISEF Research</a>
          <a href="/#mychild360">MyChild360</a>
          <a href="/#projects">Other Projects</a>
          <a href="/#music">Music</a>
          <a href="/#leadership">Leadership</a>
        </nav>
      </div>
    </header>
  );
}