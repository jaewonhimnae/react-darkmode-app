import { 
    DARK_MODE
} from './types';

export function darkModeAction(variable) {
    return { 
        type: DARK_MODE,
        payload: variable
    }
}