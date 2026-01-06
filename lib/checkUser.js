export { currentUser } from "@clerk/nextjs/server";

export const checkUser = async (req) => {
    const user = await currentUser({ req });

    if (!user) {
        return null;
    }
    
    try {
        const loggedInUser = await db.user.findUnique({
            where: {
            clerUserId: user.id,
        },
        });

        if (loggedInUser) {
            return loggedInUser;
        }

        const newUser = await db.user.create({
            data: {
                clerUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddresses,
            },
        });

        return newUser;
    }
        catch (error) {
        console.log(error.message);
        }
    };