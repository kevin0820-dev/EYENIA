import { AUTHENTICATE } from "../consts";

const initState = {
    isAuthenticated: false,
    token: null
};

export default (state = initState, action) => {
    if (action.type == AUTHENTICATE) {
        return {
            ...state,
            isAuthenticated: true,
            token: action.token
        };
    }
}