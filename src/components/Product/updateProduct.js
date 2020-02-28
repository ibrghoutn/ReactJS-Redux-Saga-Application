import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { ONEPRODUCT } from './constants/types';

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
        this.props.getProduct(productId);

    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();

        const updatedproduct = {
            id : this.state.id,
            designation : this.state.designation,
            price : this.state.price,
            quantity : this.state.quantity,
        };

        this.props.updateProduct(updatedproduct);


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
                        <form onSubmit={this.onSubmit}>
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

                            <input type="submit" className="btn btn-primary btn-block mt-4" value="Update Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

const mapStateTopProps = (state) => {
    return {
      product: state.product_red.product,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getProduct: (productId) => {
        dispatch({ type: ONEPRODUCT.LOAD, value: productId });
      },
      updateProduct: (product) => {
        dispatch({ type: ONEPRODUCT.UPDATE_SUCCESS, value: product });
      },
    }
  }

  export default connect(mapStateTopProps, mapDispatchToProps)(updateProduct);
