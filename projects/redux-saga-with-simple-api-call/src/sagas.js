import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_USER_FETCH, GET_USER_SUCCESS } from "./actions.js";

function usersFetch(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

function* workGetUsersFetch(){
    const users = yield call(usersFetch)
    yield put({type: GET_USER_SUCCESS, users})
}

function* mySaga(){
    yield takeEvery(GET_USER_FETCH, workGetUsersFetch);
}

export default mySaga;