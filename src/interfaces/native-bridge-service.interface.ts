import { IDialogConfig } from "./dialog-config.interface";

export interface INativeBridgeService {
    showSnackbar(message: string): void;
    openDialog(dialogConfig: IDialogConfig): void;
}