import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { GET_PRODUCTS, DELETE_PRODUCT } from './constants/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

class ProductList extends Component {

    componentDidMount() {
        this.props.getUsers();
        
    }

    deleteUser = (product) => {
        this.props.deleteUser(product.id);
    }

    render(){
        const { products } = this.props;
        let BoardContent;

        const BoardAlgorithm = products => {
            if (products.length < 1) {
            return(
                <div className="container alert alert-info text-center" role="alert">
                No Product on the board
                </div>
                )
            }

            else{
                const rows = products.map(product => 
                    <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.designation}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                    <Link to={`/updateProduct/${product.id}`} className="btn btn-primary">
                     <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button className="btn btn-danger ml-4" 
                    onClick={() => { this.deleteUser(product) }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                        
                        
                    </td>
                    </tr>
                );
    
                return(
                        <table className="table col-md-10 text-center">
                            <thead className="thead-light">
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Designion</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                );
    
            }
        };

        BoardContent = BoardAlgorithm(products);

        return (

            <div className="container">
                <Link to="/addProduct" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlusCircle}/>
                <i className="fas fa-plus-circle"> Create New Product</i>
                </Link>
                <br />
                <hr />
                {BoardContent}
            </div>
                    
            );

    }
}

const mapStateTopProps = (state) => {
    return {
      products: state.product_red
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: () => {
        dispatch({ type: GET_PRODUCTS });
      },

      deleteUser: (productId) => {
        dispatch({ type: DELETE_PRODUCT, value: productId });
      },
    }
  }
  
  export default connect(mapStateTopProps, mapDispatchToProps)(ProductList);