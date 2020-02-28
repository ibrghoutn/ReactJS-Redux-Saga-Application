import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { POST_PRODUCT } from './constants/types';

class Addproduct extends Component {

    constructor(){
        super();
        this.state = {
            designation :'',
            price :'',
            quantity :'',
            errors : {}
        };

        this.onChange = this.onChange.bind(this);

    }

    componentWillReceiveProps(nextProps){

        if (nextProps.errors) {
            this.setState({
                errors : nextProps.errors,
            })
            
        }

    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    addUser = () => {
        this.props.addUser(
            { designation: this.state.designation, price: this.state.price, quantity: this.state.quantity }
            );
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

                            <button className="btn btn-primary btn-block mt-4" onClick={this.addUser}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

const mapStateTopProps = (state) => {
    return {

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (product) => {
        dispatch({ type: POST_PRODUCT, value: product });
      }
    }
  }
  
  export default connect(mapStateTopProps, mapDispatchToProps)(Addproduct);
