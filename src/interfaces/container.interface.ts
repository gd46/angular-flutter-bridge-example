import { IRouteConfig } from "./route-config.interface";

export interface IContainer {
    setTitle(title: string): void;
    openDialog(dialogConfig: string): void;
    sendJson(json: any): void;
    routeToFeature(routeConfig: IRouteConfig): void;
    showSnackbar(message: string): Promise<any>;
}