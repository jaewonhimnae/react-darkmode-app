import {
    DARK_MODE
} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case DARK_MODE:
            return { ...state, darkMode: action.payload }
        default:
            return state;
    }
}