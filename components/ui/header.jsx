"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { FolderOpenIcon, PenBoxIcon, User } from "lucide-react";
import { Button } from "./button";
import UserMenu from "./user-menu";

export const Header = () => {
  return (
        <header className="container mx-auto">
            <nav className="flex items-center justify-between py-6 px-4">
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt="Logo" width={200} height={60}
                    className="h-10 w-auto object-contain" />
                </Link>
            <div className="flex items-center space-x-4">
                
                <SignedIn>
                    <Link href={"/dashboard#collections"}>
                    <Button variant="outline" className="flex items-center gap-2">
                        <FolderOpenIcon size={18} />
                        <span className="hidden md:inline">Collections</span>
                    </Button>
                </Link>
                </SignedIn>

                <Link href={"/journal/write"}>
                    <Button variant="journal" className="flex items-center gap-2">
                        <PenBoxIcon size={18} />
                        <span className="hidden md:inline">Write New</span>
                    </Button>
                </Link>


                <SignedOut>
                    <SignInButton forceRedirectUrl="/dashboard">
                        <Button variant="outline">Login</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserMenu />
                </SignedIn>

            </div>
            </nav>
        </header>
  )
};
