import { ADD_ARTICLE,USER_AUTHENTICATED } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}
export function userAuthenticated(payload) {
    return { type: USER_AUTHENTICATED, payload }
}