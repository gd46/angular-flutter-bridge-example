import { Injectable } from "@angular/core";
import { IContainer } from "src/interfaces/container.interface";

@Injectable({ providedIn: 'root' })
export class WindowService {
    constructor() {
        this.getWindow().Container = {};
    }

    getWindow(): any {
        return window;
    }

    getContainer(): IContainer {
        return this.getWindow().Container;
    }

}