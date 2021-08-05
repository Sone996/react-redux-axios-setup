import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { connect, useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/Counter/counter.actions";
import { setProducts } from './redux/Products/products.actions';

function App(props) {

  const productsSelector = useSelector((state) => {
    return state.products.productsList
  });
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
  }

  useEffect( () => {
    fetchProducts();
  }, [])

  return (
    <div className="App">
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <div className="list">
        {/* dasasda { productsSelector.length } */}
        {
          productsSelector.map(product => 
            <div key={product.id} className="listItem">
              <span>{product.id}.</span>
              <span>{product.title}</span>
              <span>{product.price}</span>
              {/* <span>{product.description}</span> */}
              <span>{product.category}</span>
              {/* <image src={product.image} alt="img" style={{width: "300px", height: "300px"}}></image> */}
            </div>
          )
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    products: state.products.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
