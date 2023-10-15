import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex flex-row items-center w-full h-12 px-24 fixed z-10 bg-red-50">
      <Link href="/" className="mr-12">
        Home
      </Link>
      <Link href="/history">History</Link>
    </header>
  );
}
