import { GET_USER_SUCCESS } from "./actions.js";

const myFirstReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return { ...state, users: action.users }
        default:
            return state;
    }
}

export default myFirstReducer