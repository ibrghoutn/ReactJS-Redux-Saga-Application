import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {ONEPRODUCT, PRODUCTS} from './constants/types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusCircle } from '@fortawesome/fontawesome-free-solid';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    chargeChart = () => {
        const { products } = this.props;
        const dataChart = [];
        const dataxAis = [];

        products.map(prod => {
            dataChart.push(prod.quantity);
            dataxAis.push(prod.designation);

            return null;
        });

        const options = {
            title: {
                text: 'Chart for product quantities'
            },

            xAxis: {
                categories: dataxAis,
            },

            yAxis: {
                alternateGridColor: '#b7cff7',
                title: {
                    text: 'Quantity value'
                }
            },

            series: [{
                data: dataChart,
                zones: [
                    {
                        value: 50,
                        color: 'red'
                    },
                    {
                        value: 200,
                        color: 'green'
                    },
                    {
                        color: 'yellow'
                    },
                ]
            }],
        }

        return(
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }

    deleteUser = (product) => {
        this.props.deleteProduct(product.id);
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
                <br />
                <br />
                <hr />

                {this.chargeChart()}
            </div>

            );

    }
}

const mapStateTopProps = (state) => {
    return {
      products: state.product_red.products
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getProducts: () => {
        dispatch({ type: PRODUCTS.LOAD });
      },

      deleteProduct: (productId) => {
        dispatch({ type: ONEPRODUCT.DELETE_SUCCESS, value: productId });
      },
    }
  }

  export default connect(mapStateTopProps, mapDispatchToProps)(ProductList);
