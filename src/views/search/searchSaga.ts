import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../store/types"
import API from "../../services/API";
import { SearchBookSuccess } from "../../store/action";
import { ENDPOINT } from "../../services/Endpoints"
interface IResponse {
    Response: {
        data: string[]
    }
}
function* SearchBookWorker(action: any) {
    console.log('action', action)
    try {
        const Response: any = yield call(API.get, `${ENDPOINT.books}?q=${action.payload}`)
        console.log('response', Response)
        yield put(SearchBookSuccess(Response.data))
    }
    catch (error: any) {
        console.log('error', error)
    }
}

export function* SearchBookWatcher() {
    yield takeLatest(types.SEARCH_BOOK_REQUEST, SearchBookWorker)
}