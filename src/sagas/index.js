import { all } from 'redux-saga/effects';
import { watchGetUsers, watchGetUser, watchCancelUserUpdate, watchDeleteUser, watchEditUser, watchPostUser, watchPutUser } from '../components/Product/sagas/productSaga';

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchGetUser(),
    watchCancelUserUpdate(),
    watchDeleteUser(),
    watchEditUser(),
    watchPostUser(),
    watchPutUser()
  ]);
}