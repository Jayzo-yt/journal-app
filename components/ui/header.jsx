"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { FolderOpenIcon, PenBoxIcon, User } from "lucide-react";
import { Button } from "../button";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/actions/checkUser";

export const Header = () => {
    useEffect(() => {
        // Check and create user if needed
        checkUser().catch((err) => console.error("Error checking user:", err));
    }, []);
  return (
        <header className="container mx-auto">
            <nav className="flex items-center justify-between py-6 px-4">
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt="Logo" width={300} height={90}
                    className="h-15 w-auto object-contain border border-black rounded-full" />
                </Link>
            <div className="flex items-center space-x-4">
                
                <SignedIn>
                    <Link href={"/dashboard#collections"}>
                    <Button variant="outline" className="border border-black flex items-center gap-2">
                        <FolderOpenIcon size={18} />
                        <span className="hidden md:inline">Collections</span>
                    </Button>
                </Link>
                </SignedIn>

                <Link href={"/journal/write"}>
                    <Button variant="outline" className="border border-black flex items-center gap-2">
                        <PenBoxIcon size={18} />
                        <span className="hidden md:inline">Write New</span>
                    </Button>
                </Link>


                <SignedOut>
                    <SignInButton className="flex items-center gap-2 border border-black" forceRedirectUrl="/dashboard">
                        <Button variant="outline" className="border border-black">
                            <span>Login</span>
                        </Button>
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
