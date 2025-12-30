import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export const Header = () => {
  return (
        <header className="container">
            <nav className="flex items-center justify-between py-6 px-4">
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt="Logo" width={200} height={60}
                    className="h-10 w-auto object-contain" />
                </Link>
            <div>
                {/*login button*/}
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            </nav>
        </header>
  )
};
