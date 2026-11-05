export function isGithubRepoUrl(value: string): boolean {
    try {
        const url = new URL(value)
        const parts = url.pathname.split("/").filter(Boolean);
        return url.hostname === "github.com" && parts.length === 2
    } catch {
        return false
    }
}