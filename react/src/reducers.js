import { CHANGE_INPUT_FIELD } from './constants';

const initialState = {
    inputField: ''
}

export const inputAmount = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_INPUT_FIELD:
            return Object.assign({}, state, {inputField: action.payload});
            // the same as return {...state, {inputField: action.payload}}
        default:
            return state;
    }
}