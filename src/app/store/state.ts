import { ActionReducerMap } from '@ngrx/store';
import { Home } from '../models/home.model';
import { homeReducer } from './Home/home-reducer';
export interface AppState {
    home: Home
}
export const reducers: ActionReducerMap<AppState, any> = {
    home: homeReducer,
}