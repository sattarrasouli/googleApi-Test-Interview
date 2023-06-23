import * as types from "../../store/types"
import { IAction, IState } from "../../utils/interfaces"
/**
 * search reducer to handle data base on action.
 * declare initial state and its type
 */
const initialState: IState = {
    data: [],
    Error: false,
    isLoading: false
}

export default function SearchReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case types.SEARCH_BOOK_REQUEST:
            return {
                ...state,
                data: action.payload,
                isLoading: true,
                Error: false
            }
        case types.SEARCH_BOOK_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                Error: false
            }
        case types.SEARCH_BOOK_FAILED:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                Error: true
            }
        default:
            return state
    }
}