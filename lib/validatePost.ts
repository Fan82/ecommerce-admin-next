export type PostPlatform = "linkedin" | "threads" | "dcard";

export const PLATFORM_LIMITS: Record<PostPlatform, number> = {
    linkedin: 3000,
    threads: 500,
    dcard: 2000,
};

export function validatePost(text: string, platform: PostPlatform): {
    ok: boolean; errors: string[]
} {
    const errors: string[] = [];

    if (text.trim() === "") {
        errors.push("Post is empty");
    }
    if (text.length > PLATFORM_LIMITS[platform]) {
        errors.push(`Post is too long (max ${PLATFORM_LIMITS[platform]})`);
    }
    if (!text.includes("https://github.com/")) {
        errors.push("Post must include a GitHub link");
    }

    return { ok: errors.length === 0, errors };
}