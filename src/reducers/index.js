import Products from '../components/Product/reducers/productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product_red: Products
});

export default rootReducer;