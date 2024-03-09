
import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Navbar } from 'flowbite-react';





function NavBar() {
  return (
    <Navbar fluid style={{
      minHeight: "4rem",
    }} >

    <div className="flex items-center justify-end w-full">
      <div className="flex items-center gap-4">
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </div>
    </div>
    </Navbar>

  );
}

export default NavBar;
