import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { GET_PRODUCT, PUT_PRODUCT, CANCEL_PRODUCT_UPDATE } from './constants/types';

class updateProduct extends Component {

    constructor(){
        super();
        this.state = {
            id :'',
            designation :'',
            price :'',
            quantity :'',
            errors : {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps){

        if (nextProps.errors) {
            this.setState({
                errors : nextProps.errors,
            })
            
        }

        const {
            id,
            designation,
            price,
            quantity,
        } = nextProps.product

        this.setState({
            id,
            designation,
            price,
            quantity,
        })
    }

    componentDidMount() {
        const {productId} = this.props.match.params;
        this.props.getUser(productId);
    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    updateUser = (product) => {
        this.props.updateUser(product);
    }

    onSubmit(e){
        e.preventDefault();

        const updatedproduct = {
            id : this.state.id,
            designation : this.state.designation,
            price : this.state.price,
            quantity : this.state.quantity,
        };

        this.props.AddProduct(updatedproduct, this.props.history);
        
        
    }

    render() {

        return (

            <div className="addProjectTask">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                    Back to Board
                    </Link>
                        <h4 className="display-4 text-center">Add /Update Product</h4>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                name="designation" placeholder="Product Designation"
                                value = {this.state.designation} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                name="price" placeholder="Product Price"
                                value = {this.state.price} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                name="quantity" placeholder="Product Quantity"
                                value = {this.state.quantity} onChange={this.onChange} />
                            </div>

                            <button className="btn btn-primary btn-block mt-4" onClick={() => { this.updateUser(
                                {
                                    id: this.state.id,
                                    designation :this.state.designation,
                                    price:this.state.price,
                                    quantity: this.state.quantity
                                }
                                ) }}>Update</button>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
  
const mapStateTopProps = (state) => {
    return {
      product: state.product_red
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getUser: (productId) => {
        dispatch({ type: GET_PRODUCT, value: productId });
      },
      updateUser: (product) => {     
        console.log('dispatch update', product) 
        dispatch({ type: PUT_PRODUCT, value: product });
      },
      cancelUpdate: (productId) => {
        dispatch({ type: CANCEL_PRODUCT_UPDATE, value: productId });
      },

    }
  }
  
  export default connect(mapStateTopProps, mapDispatchToProps)(updateProduct);
