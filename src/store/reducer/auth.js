import authActions from "../actions/auth";
import { index } from "../../services/storage";

const token = storage.get("token");

const initialState = {
    isFetched: true,
    isAuthenticated: !!token,
    data: {},
    token: "",
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
    switch (action.type) {
        case authActions.GetMe.REQUEST:
            return {
                ...state,
                isFetched: false
            };

        case authActions.Login.SUCCESS:
            return {
                ...state,
                isFetched: true,
                isAuthenticated: true,
                token: action.payload.success.token,
                data: action.payload.user
            };

        case authActions.GetMe.SUCCESS:
            return {
                ...state,
                isFetched: true,
                isAuthenticated: true,
                data: action.payload.data
            };
        case authActions.Logout.REQUEST:
        case authActions.Logout.FAILURE:
        case authActions.Login.FAILURE:
        case authActions.GetMe.FAILURE:
            return {
                ...state,
                isFetched: true,
                isAuthenticated: false,
                token: "",
                data: {}
            };

        default:
            return state;
    }
};
