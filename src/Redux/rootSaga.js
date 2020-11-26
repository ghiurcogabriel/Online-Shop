import { all, call } from 'redux-saga/effects';

import userSagas from './User/User.sagas';
import productsSagas from './Products/products.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas)
  ])
}