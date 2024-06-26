import { createStore } from 'redux';

const DARK_THEME = 'DARK_THEME';
const LIGHT_THEME = 'LIGHT_THEME';
const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggle = () => ({
    type: TOGGLE_THEME
});

export const dark = () => ({
    type: DARK_THEME
});

export const light = () => ({
    type: LIGHT_THEME
});

const initialState = {
    theme: LIGHT_THEME
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
            };
        case DARK_THEME:
            return {
                ...state,
                theme: DARK_THEME
            };
        case LIGHT_THEME:
            return {
                ...state,
                theme: LIGHT_THEME
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;