import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from 'next/image'
function Navbar() {
  return (
    <nav className="z-[22] flex w-full items-center justify-between border-b px-[200px] py-4 text-xl font-semibold">
      <Link href="/" className="cursor-pointer flex flex-row my-auto">
        <Image
          src="/image.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />{" "}
      </Link>
      <Link href="/setup" className="cursor-pointer">
        Set Up
      </Link>
      <Link href="/aboutus" className="cursor-pointer">
        About Us
      </Link>
      <div className="flex cursor-pointer flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
