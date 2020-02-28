import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_PRODUCTS, GET_PRODUCTS, GET_PRODUCT, SET_PRODUCT, PUT_PRODUCT, POST_PRODUCT, DELETE_PRODUCT, CANCEL_PRODUCT_UPDATE, EDIT_PRODUCT, SET_EDIT_MODE } from '../constants/types';
import Axios from 'axios';

export const watchGetUsers = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetUsers);
}

function* workerGetUsers() {
  console.log('get products');
  try {
    const uri = 'http://localhost:8080/products';
    const result = yield call(Axios.get, uri);
    yield put({ type: SET_PRODUCTS, value: result.data._embedded.products });
  } 
  catch {
    console.log('Failed');
  }
}

export const watchGetUser = function* () {
  yield takeEvery(GET_PRODUCT, workerGetUser);
}

function* workerGetUser(action) {
  console.log('get one product');
  try {
    const uri = `http://localhost:8080/products/${action.value}`;
    const result = yield call(Axios.get, uri);
    yield put({ type: SET_PRODUCT, value: result.data });
  } 
  catch {
    console.log('Failed');
  }
}

export const watchDeleteUser = function* () {
  yield takeEvery(DELETE_PRODUCT, workerDeleteUser);
}

function* workerDeleteUser(action) {
  console.log('Deleting a product');
  
  try {
    if(window.confirm(`you are deleting project task ${action.value} this action can not be undone`)){
      const uri = `http://localhost:8080/products/${action.value}`;
      yield call(Axios.delete, uri);
      yield put({ type: GET_PRODUCTS});
      console.log('Deleted a user successfully');
    }

  } 
  catch {
    console.log('Failed');
  }
}

export const watchPostUser = function* () {
  yield takeEvery(POST_PRODUCT, workerPostUser);
}

export const watchPutUser = function* () {
  yield takeEvery(PUT_PRODUCT, workerPutUser);
}



export const watchEditUser = function* () {
  yield takeEvery(EDIT_PRODUCT, workerEditUser);
}

export const watchCancelUserUpdate = function* () {
  yield takeEvery(CANCEL_PRODUCT_UPDATE, workerCancelUserUpdate);
}

function* workerPostUser(action) {
  console.log('Adding a product');
  try {
    const uri = 'http://localhost:8080/products';
    yield call(Axios.post, uri, action.value);
    yield put({ type: GET_PRODUCTS});
    console.log('Added a user successfullt');
  } 
  catch {
    console.log('Failed');
  }
} 

function* workerPutUser(action) {
  console.log('Updating a product');
  try {
    const uri = `http://localhost:8080/products/${action.value.id}`;
    yield call(Axios.put, uri, action.value);
    yield put({ type: GET_PRODUCTS});
    console.log('Updated a user successfully');
  } 
  catch {
    console.log('Failed');
  }
} 

function* workerEditUser(action) {
  console.log('Editing a product', action);
    yield put({ type: SET_EDIT_MODE, value:{productId: action.value, editMode: true}});
} 

function* workerCancelUserUpdate(action) {
  console.log('Cancelled a product edit');
    yield put({ type: SET_EDIT_MODE, value:{productId: action.value, editMode: false}});
} 