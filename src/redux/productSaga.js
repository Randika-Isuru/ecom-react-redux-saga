import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts(){
    console.warn("get product saga called")
    let data =  yield fetch('https://jsonplaceholder.typicode.com/todos')
    console.warn("getProducts action is called", data)
    yield put({type: SET_PRODUCT_LIST})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;