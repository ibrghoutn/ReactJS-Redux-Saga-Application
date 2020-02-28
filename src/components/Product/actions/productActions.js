import axios from 'axios';

export const fetchProducts = async endpoint => {

    const response = await axios.get(`http://localhost:8080/${endpoint}`);
    const data = response.data._embedded.products;
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const getOneProduct = async endpoint => {

    const response = await axios.get(`http://localhost:8080/products/${endpoint}`);
    const data = response.data;
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const updateOneProduct = async endpoint => {

    const response = await axios.put(`http://localhost:8080/products/${endpoint.id}`, endpoint);
    if (response.status > 400) {
        throw new Error(response.error);
    }
};

export const deleteOneProduct =  async endpoint => {
    if(window.confirm(`you are deleting product ${endpoint} this action can not be undone`)){
        await axios.delete(`http://localhost:8080/products/${endpoint}`);
    }
};

export const AddProduct = async endpoint => {

    try {
        await axios.post("http://localhost:8080/products", endpoint);
    } catch (error) {
        console.log(error.toString());
    }

};
