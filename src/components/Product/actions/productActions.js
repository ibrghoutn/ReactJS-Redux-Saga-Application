// import axios from 'axios';
// import { PRODUCTS, GET_PRODUCT, GET_ERRORS, DELETE_PRODUCT, ONEPRODUCT } from '../constants/types';

// const url = `http://localhost:8080`;

// export const fetchProducts = async endpoint => {

//     const response = await axios.get(`${url}/${endpoint}`);
//     const data = response.data._embedded.products;
//     if (response.status > 400) {
//         throw new Error(data.errors);
//     }
//     return data;
// };

// export const getOneProduct = async endpoint => {

//     const response = await axios.get(`${url}/${endpoint}`);
//     const data = response.data._embedded.products;
//     if (response.status > 400) {
//         throw new Error(data.errors);
//     }
//     return data;
// };

// export const deleteProduct = pd_id => async dispatch => {
//     if(window.confirm(`you are deleting product ${pd_id} this action can not be undone`)){
//         await axios.delete(`http://localhost:8080/products/${pd_id}`);
//         dispatch({
//             type : ONEPRODUCT.DELETE_SUCCESS,
//             payload : pd_id,
//         })
//     }
// };

// export const loadProducts = () => ({
//     type: PRODUCTS.LOAD,
// });

// export const setProducts = (products) => ({
//     type: PRODUCTS.LOAD_SUCCESS,
//     products,
// });

// export const setError = error => ({
//     type: PRODUCTS.LOAD_FAIL,
//     error,
// });

// /**    ------------------------------- */

// export const AddProduct = (product, history) => async dispatch => {

//     try {
//         await axios.post("http://localhost:8080/products", product);
//         history.push("/");
//         dispatch({
//             type : GET_ERRORS,
//             payload :{},
//         })
//     } catch (error) {
//         dispatch({
//             type : GET_ERRORS,
//             payload :error.response.data
//         });
//     }

// };

// export const getProduct = (pd_id , history) => async dispatch => {

//     try {
//         const res = await axios.get(`http://localhost:8080/products/${pd_id}`)
//         dispatch({
//             type : GET_PRODUCT,
//             payload : res.data,
//         });
//     } catch (error) {
//         history.push("/");
//     }
// }

