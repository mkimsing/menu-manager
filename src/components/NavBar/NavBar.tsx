import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex flex-row w-full h-12 px-24">
      <Link href="/order" className="mr-12">
        Order
      </Link>
      <Link href="/history">History</Link>
    </header>
  );
}
