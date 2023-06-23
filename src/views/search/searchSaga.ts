import { CallEffect, ForkEffect, PutEffect, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../store/types"
import API from "../../services/API"
import { SearchBookSuccess } from "../../store/action"
import { ENDPOINT } from "../../services/Endpoints"
import { toast } from "react-toastify";
import { IAction, IResponse } from "../../utils/interfaces";

/**
 * saga file consist of worker and watcher 
 * watcher: watch out for actions user triger and catch them with takelatest(which means the latest one no queue for actions) and then call worker which has been assigned to it.
 * worker: call the api with a query to get result and then send it to redux store (action: searchbooksuccess) error handling using try/catch
 * @param action action to triger api
 */

function* SearchBookWorker(action: IAction): Generator<CallEffect<unknown> | PutEffect<{
    type: string;
    payload: string[];
}>, void, any> {

    try {
        if (action.payload) {
            const Response: IResponse = yield call(API.get, `${ENDPOINT.books}?q=${action.payload}`)
            yield put(SearchBookSuccess(Response.data))
        }
    }
    catch (error: any | { message: string }) {
        console.error('error', error)
        toast.error(error.message)
    }
}

export function* SearchBookWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(types.SEARCH_BOOK_REQUEST, SearchBookWorker)
}