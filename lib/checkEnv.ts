export function findMissingEnv(required: string[], env: Record<string, string | undefined>): string[] {
    return required.filter((name) => !env[name])
}