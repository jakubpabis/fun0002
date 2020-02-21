import { CHANGE_INPUT_FIELD } from './constants';
import { TOGGLE_MODALS } from './constants';


export const setInputField = (number) => {
    console.log(number);
    return {
        type: CHANGE_INPUT_FIELD,
        payload: number

    }
}

export const setModalsToggle = (Boolean) => {
    console.log(Boolean);
    return {
        type: TOGGLE_MODALS,
        payload: Boolean
    }
}