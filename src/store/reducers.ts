import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import SearchReducer from "../views/search/searchReducer"

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    SearchReducer,
});