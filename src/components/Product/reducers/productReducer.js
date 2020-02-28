import { SET_PRODUCTS, SET_PRODUCT, SET_EDIT_MODE } from '../constants/types';

const products = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.value];
      
    case SET_PRODUCT:
      return {...action.value};

    case SET_EDIT_MODE:{
      console.log(action)
      const products = (state || []).map(x => {
        if(x.id === action.value.productId){
          x.editMode = action.value.editMode;
        }
        return {...x}
      });
      console.log(products)
      return [...products]
    }

    default: return state;
  }
}

export default products;