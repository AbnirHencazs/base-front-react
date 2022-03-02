import { SET_THEME } from "../utils/constants";

export default function GlobalReducer(state, action){
    switch(action.type){
        case SET_THEME:
            return { ...state, theme: state.theme == 'light' ? 'dark' : 'light' }
        default:
            return { ...state }
    }
}