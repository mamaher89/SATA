import { Action } from "@ngrx/store";
import { Home } from "src/app/models/home.model";

export const HOME = 'HOME'

export class StoreHomeActions implements Action {
    readonly type = HOME;
    constructor(public payload: Home) { }
}
