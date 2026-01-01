
"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

const UserMenu = () => (
    <UserButton
        appearance={{
            elements: {
                userButtonAvatarBox: "w-10 h-10",
                userButtonAvatar: "w-10 h-10",
                userButtonAvatarImage: "w-10 h-10 rounded-full object-cover"
            }
        }}
    >
        <UserButton.MenuItem>
            <UserButton.Link
                label="Dashboard"
                labelIcon={<ChartNoAxesGantt size={15} />}
                href="/dashboard"
            />
        </UserButton.MenuItem>
    </UserButton>
);

export default UserMenu;
