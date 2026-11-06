export function getApiBaseUrl(): string {
    const value = process.env.API_BASE_URL
    if (!value) throw new Error("Missing env: API_BASE_URL")
    return value
}

export function getAdminPassword(): string {
    const value = process.env.ADMIN_PASSWORD
    if (!value) throw new Error("Missing env: ADMIN_PASSWORD")
    return value
}
