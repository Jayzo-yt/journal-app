"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { title } from "process"; 

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

        const mood = MOODS[data.moodId.toUpperCase()];

        if (!mood) {
            throw new Error("Invalid mood selected");
        }
        const moodImageUrl = await getPixabayImages(data.moodQuery);

        const entry = await db.entry.create({
            data: {
                title: data.title,
                content: data.content,
                mood: mood.id,
                moodScore: mood.score,moodImageUrl,
                userId: userId.id,
                collectionID: data.collectionId || null,

            },
        });

        await db.draft.deleteMany({
            where: {
                userId: userId,
            },
        });

        revalidatePath("/dashboard");
        return entry;
    } catch (error) {
        throw new Error(error.message);
    }
}
