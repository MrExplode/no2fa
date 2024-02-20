export abstract class Handler {
    abstract shouldActivate(): boolean
    abstract load(): void
    unload(): void {}
}
