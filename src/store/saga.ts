import { all } from 'redux-saga/effects'
import { SearchBookWatcher } from '../views/search/searchSaga'

export default function* rootSaga() {
    yield all([
        SearchBookWatcher(),
    ])
}