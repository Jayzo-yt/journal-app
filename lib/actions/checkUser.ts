"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function checkUser() {
  try {
    const user = await currentUser();

    if (!user) {
      return { user: null };
    }

    let loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return { user: loggedInUser };
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: user.fullName ?? "",
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0]?.emailAddress ?? "",
      },
    });

    return { user: newUser };
  } catch (error) {
    console.error("Error checking user:", error);
    return { error: "Failed to check user" };
  }
}
