import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbarInner">
        <Link href="/" className="siteName">
          Brady Zhou
        </Link>

        <nav className="navLinks" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/music">Music</Link>
          <Link href="/leadership">Leadership</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}