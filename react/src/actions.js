import { CHANGE_INPUT_FIELD } from './constants';

export const setInputField = (number) => {
    console.log(number);
    return {
        type: CHANGE_INPUT_FIELD,
        payload: number

    }
}