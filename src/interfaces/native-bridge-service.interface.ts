export interface INativeBridgeService {
    openWebView(): void;
    closeWebView(): void;
    showSnackbar(message: string): void;
}