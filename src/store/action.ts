import * as types from "./types"

export const SearchBookRequest = (payload: string) => {
    return {
        type: types.SEARCH_BOOK_REQUEST,
        payload
    }
}

export const SearchBookFailed = (payload: string[]) => {
    return {
        type: types.SEARCH_BOOK_FAILED,
        payload
    }
}

export const SearchBookSuccess = (payload: string[]) => {
    return {
        type: types.SEARCH_BOOK_SUCCESS,
        payload
    }
}