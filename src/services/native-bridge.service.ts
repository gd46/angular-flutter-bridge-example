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
        private router: Router) {
        // this.windowService.getWindow().addEventListener('onRouteToFeature', (event: any) => {
        //     this.showSnackbar(JSON.stringify(event));
        //     this.router.navigateByUrl(event.routeConfig.uri)
        // })
    }

    showSnackbar(message: string) {
        this.windowService.getContainer().showSnackbar(message)
            .then((response: any) => {
                console.log(response);
            })
    }

    openDialog(dialogConfig: IDialogConfig) {
        this.windowService.getContainer().openDialog(JSON.stringify(dialogConfig));
    }
}