import { tr } from "date-fns/locale/tr";
import { unstable_cache } from "next/cache";

export async function getPixabayImages(query) {
    try {
        const response = await fetch(
            `https://pixabay.com/api?q=${query}&key=${process.env.PIXABAY_API_KEY}&min_width=1280&min_height=720&image_type=illustration&category=feelings`);
            const data = await response.json();
            return data.hits[0]?.largeImageURL || null;
    }
    catch (error) {
        console.error("Error fetching Pixabay images:", error);
        return null;
    }
}