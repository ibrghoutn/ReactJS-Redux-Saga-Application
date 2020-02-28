import { takeEvery, call, put } from 'redux-saga/effects';

import {PRODUCTS, ONEPRODUCT } from '../constants/types';

import history from '../../../history';

import {deleteOneProduct, fetchProducts, getOneProduct, updateOneProduct, AddProduct } from '../actions/productActions';

export const watchGetProducts = function* () {
  yield takeEvery(PRODUCTS.LOAD, workerGetproducts);
}

function* workerGetproducts() {
  console.log('get products');
  try {
    const products = yield call(fetchProducts, 'products');
    yield put({ type: PRODUCTS.LOAD_SUCCESS, products: products });
  } catch (error) {
    // dispatch error action
    yield put({ type: PRODUCTS.LOAD_FAIL, error: error });
  }
}

export const watchDeleteProduct = function* () {
  yield takeEvery(ONEPRODUCT.DELETE_SUCCESS, workerDeleteproducts);
}

function* workerDeleteproducts(action) {
  console.log('DELETE one product');

  try {
    yield call(deleteOneProduct, action.value);
    const products = yield call(fetchProducts, 'products');
    yield put({ type: PRODUCTS.LOAD_SUCCESS, products: products });
  } catch (error) {
    // dispatch error action
    yield put({ type: PRODUCTS.LOAD_FAIL, error: error });
  }
}

export const watchGetProduct = function* () {
  yield takeEvery(ONEPRODUCT.LOAD, workerGetproduct);
}

function* workerGetproduct(action) {
  console.log('get one product');

  try {
    const product = yield call(getOneProduct, action.value);
    yield put({ type: ONEPRODUCT.LOAD_SUCCESS, product: product });
  } catch (error) {
    // dispatch error action
    yield put({ type: ONEPRODUCT.LOAD_FAIL, error: error });
  }
}

export const watchUpdateProduct = function* () {
  yield takeEvery(ONEPRODUCT.UPDATE_SUCCESS, workerUpdateproduct);
}

function* workerUpdateproduct(action) {
  console.log('update one product');

  try {
    yield call(updateOneProduct, action.value);
    history.push('/');
  } catch (error) {
    // dispatch error action
    yield put({ type: ONEPRODUCT.LOAD_FAIL, error: error });
  }
}

export const watchPostProduct = function* () {
  yield takeEvery(ONEPRODUCT.POST_SUCCESS, workerPostproduct);
}

function* workerPostproduct(action) {
  console.log('Add new product');

  try {
    yield call(AddProduct, action.value);
    history.push('/');
  } catch (error) {
    console.log(error.toString());
  }
}
