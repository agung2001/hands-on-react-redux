import {takeEvery, put, call} from 'redux-saga/effects';
import { getCatsSuccess } from "./catSlice.js";

function* workGetCatsFetch() {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
    const formattedCats = yield cats.json()
    const formattedCatsShortened = formattedCats.slice(0, 10);
    yield put(getCatsSuccess(formattedCatsShortened));
}

function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch);
}

export default catSaga;