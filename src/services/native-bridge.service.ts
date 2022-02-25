import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
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
    }

    openWebView() {
        this.windowService.getWindow().navigationHandler.postMessage('open');
    }

    closeWebView() {
        this.windowService.getWindow().navigationHandler.postMessage('close');
    }

    showSnackbar(message: string) {
        this.windowService.getWindow().snackBarHandler.postMessage(message);
    }
}