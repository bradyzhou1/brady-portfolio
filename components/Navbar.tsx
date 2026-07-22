import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbarInner">
        <Link href="/" className="siteName">
          Brady Zhou
        </Link>

        <nav className="navLinks" aria-label="Main navigation">
          <a href="/#about">About Me</a>
          <a href="/#academic-technical">Academics</a>
          <a href="/#research">ISEF/STS Research</a>
          <a href="/#parentlensai">ParentLensAI</a>
          <a href="/#projects">Other Projects</a>
          <a href="/#music">Music</a>
          <a href="/#leadership">Leadership</a>
        </nav>
      </div>
    </header>
  );
}