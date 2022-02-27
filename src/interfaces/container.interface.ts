export interface IContainer {
    setTitle(title: string): void;
    openDialog(): void;
    sendJson(json: any): void
}