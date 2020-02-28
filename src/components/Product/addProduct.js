import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { ONEPRODUCT } from './constants/types';

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
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();

        const newProjectTask = {
            designation : this.state.designation,
            price : this.state.price,
            quantity : this.state.quantity,
        };

        this.props.addProduct(newProjectTask);


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

  const mapDispatchToProps = (dispatch) => {
    return {
      addProduct: (product) => {
        dispatch({ type: ONEPRODUCT.POST_SUCCESS, value: product });
      }
    }
  }

  export default connect(null, mapDispatchToProps)(Addproduct);
