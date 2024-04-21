import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex w-full items-center z-[22] justify-between border-b px-[200px] py-4 text-xl font-semibold">
      <Link href="/">Tube-TasTic!</Link>
      <Link href="/setup">Set Up</Link>
      <div>About Us</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar