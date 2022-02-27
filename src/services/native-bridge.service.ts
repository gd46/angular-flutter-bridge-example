import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { IDialogConfig } from "src/interfaces/dialog-config.interface";
import { INativeBridgeService } from "src/interfaces/native-bridge-service.interface";
import { WindowService } from "./window.service";

@Injectable({ providedIn: 'root' })
export class NativeBridgeService implements INativeBridgeService {
    constructor(private windowService: WindowService,
        @Inject(DOCUMENT) private document: Document) {
        this.windowService.getContainer().setTitle = (title: string) => {
            this.document.getElementById("title")!.innerHTML = title;
            this.showSnackbar('Set title from flutter!!!');
        }
        this.windowService.getContainer().sendJson = (json: any) => {
            this.document.getElementById("json")!.innerHTML = json['title'];
            this.showSnackbar(json);
        }
    }

    showSnackbar(message: string) {
        this.windowService.getWindow().snackBarHandler.postMessage(message);
    }

    openDialog(dialogConfig: IDialogConfig) {
        this.windowService.getWindow().dialogHandler.postMessage(JSON.stringify(dialogConfig));
    }
}