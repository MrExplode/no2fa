export interface Handler {
    shouldLoad(): boolean
    load(): void
}
