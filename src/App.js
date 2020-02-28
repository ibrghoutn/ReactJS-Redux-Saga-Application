import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ProductList from './components/Product/ProductList';
import { Provider } from 'react-redux';
import configureStore from './store';
import updateProduct from './components/Product/updateProduct';
import addProduct from './components/Product/addProduct';

const store = configureStore();

function App() {
  return (

    <Provider store={store}>

      <Router>

      <div className="App">

        <Navbar />
        <Route exact path="/" component={ProductList} />
        <Route exact path="/addProduct" component={addProduct} />
        <Route exact path="/updateProduct/:productId" component={updateProduct} />

      </div>

      </Router>

    </Provider>

  );
}

export default App;
