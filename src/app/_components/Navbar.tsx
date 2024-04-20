import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b px-[200px] py-4 text-xl font-semibold">
      <div>Youtube Swag</div>

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