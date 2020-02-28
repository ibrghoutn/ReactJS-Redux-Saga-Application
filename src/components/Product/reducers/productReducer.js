import { PRODUCTS, ONEPRODUCT } from '../constants/types';

const initalState = {
  products: [],
  product: {},
  loading: false,
  error: '',
}

const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case PRODUCTS.LOAD:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,

      };

    case PRODUCTS.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };

    case ONEPRODUCT.LOAD:
      return {
        ...state,
        loading: true,
      };

    case ONEPRODUCT.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.product,

      };

    case ONEPRODUCT.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };

    default:
      return state;
  }
};

export default productReducer;
