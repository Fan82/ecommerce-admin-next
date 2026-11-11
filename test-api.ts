import { updateFeaturedApi } from "./lib/api/products";

async function demo(id: number) {
    console.log("A");

    try {
        const request = updateFeaturedApi(id, true);
        console.log("B");

        await request;
        console.log("C");
    } catch (error) {
        console.log("D", error instanceof Error ? error.message : error);
    } finally {
        console.log("E");
    }
}

demo(1);
console.log("F");