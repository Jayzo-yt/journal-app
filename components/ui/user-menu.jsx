
"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => (
    <UserButton
        appearance={{
            elements: {
                avatarBox: 'h-20 w-auto border border-black rounded-full',
            }
        }}
    >
    <UserButton.MenuItems>
        <UserButton.Link
            label="Dashboard"
            labelIcon={<ChartNoAxesGantt size={15}/>}
            href="/dashboard"
        />
        <UserButton.Action label="manageAccount" />
    </UserButton.MenuItems>
    </UserButton>
);


export default UserMenu;
