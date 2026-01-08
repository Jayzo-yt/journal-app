"use server";

import { auth } from "@clerk/nextjs/server";

export async function createJournalEntry(data) {
    try {
        const{ userId } = await auth();
        if(!userId){
            throw new Error("User not authenticated");
        }

        const User = await db.user.findUnique({
            where: { clerkUserId: userId },
        });
        
        if (!User) {
            throw new Error("User not found in database");
        }
    } catch (error) {


    }