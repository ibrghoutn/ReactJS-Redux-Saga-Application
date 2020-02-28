import { all } from 'redux-saga/effects';
import {
    watchDeleteProduct,
    watchGetProducts,
    watchGetProduct,
    watchUpdateProduct, watchPostProduct
} from "../components/Product/sagas/productSaga";

export default function* rootSaga() {
  yield all([
      watchGetProducts(),
      watchDeleteProduct(),
      watchGetProduct(),
      watchUpdateProduct(),
      watchPostProduct(),
  ]);
}
