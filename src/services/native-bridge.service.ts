import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { IDialogConfig } from "src/interfaces/dialog-config.interface";
import { INativeBridgeService } from "src/interfaces/native-bridge-service.interface";
import { IRouteConfig } from "src/interfaces/route-config.interface";
import { WindowService } from "./window.service";

@Injectable({ providedIn: 'root' })
export class NativeBridgeService implements INativeBridgeService {
    constructor(private windowService: WindowService,
        @Inject(DOCUMENT) private document: Document,
        private router: Router) {
        this.windowService.getContainer().setTitle = (title: string) => {
            this.document.getElementById("title")!.innerHTML = title;
            this.showSnackbar('Set title from flutter!!!');
        }
        this.windowService.getContainer().sendJson = (json: any) => {
            this.document.getElementById("json")!.innerHTML = json['title'];
            this.showSnackbar(json);
        }
        this.windowService.getContainer().routeToFeature = (routeConfig: IRouteConfig) => {
            this.router.navigateByUrl(routeConfig.uri);
        }
    }

    showSnackbar(message: string) {
        this.windowService.getWindow().snackBarHandler.postMessage(message);
    }

    openDialog(dialogConfig: IDialogConfig) {
        this.windowService.getWindow().dialogHandler.postMessage(JSON.stringify(dialogConfig));
    }
}