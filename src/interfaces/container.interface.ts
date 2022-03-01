import { IRouteConfig } from "./route-config.interface";

export interface IContainer {
    setTitle(title: string): void;
    openDialog(): void;
    sendJson(json: any): void;
    routeToFeature(routeConfig: IRouteConfig): void;
}