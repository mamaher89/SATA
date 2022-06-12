import * as homeActions from "./home-action";
import { Home } from "src/app/models/home.model";


export let home!: Home


export function homeReducer(homeState: Home = home,
    action: homeActions.StoreHomeActions): any {
    switch (action.type) {
        case homeActions.HOME:
            return {
                ...action.payload
            }

        default:
            return homeState
    }
}
