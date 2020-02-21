import { CHANGE_INPUT_FIELD } from './constants';
import { TOGGLE_MODALS} from './constants';

const initialState = {
    inputField: '',
    modalsToggle: false
}

export const inputAmount = (state=initialState.inputField, action={}) => {
    switch (action.type) {
        case CHANGE_INPUT_FIELD:
            return Object.assign({}, state, {inputField: action.payload});
            // the same as return {...state, {inputField: action.payload}}
        default:
            return state;
    }
}

export const toggleModals = (state=initialState.modalsToggle, action={}) => {
    switch (action.type) {
        case TOGGLE_MODALS:
            return Object.assign({}, state, {modalsToggle: !state.modalsToggle});
        default:
            return state;
    }
}