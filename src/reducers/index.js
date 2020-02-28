import productReducer from '../components/Product/reducers/productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product_red: productReducer,
});

export default rootReducer;
