import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="bg-cyan-600 text-white">
          <nav className="flex flex-row w-auto items-center justify-center gap-x-16 py-6">
            <Link
              href="/"
              className=" cursor-pointer hover:text-sky-700 text-xl"
            >
              HOME
            </Link>
            <Link
              href="/blog"
              className=" cursor-pointer hover:text-sky-700 text-xl"
            >
              BLOG
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
