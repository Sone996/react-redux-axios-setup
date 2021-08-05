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
    <div className="App mt-4">
      <div>Count: {props.count}</div>
      <button className="bg-reactblue text-lightblue p-2 rounded-lg border" onClick={() => props.increaseCounter()}>Increase Count</button>
      <button className="bg-reactblue text-lightblue p-2 rounded-lg border" onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <div className="flex flex-col mx-32 border-t mt-5 pt-5">
        {/* dasasda { productsSelector.length } */}
        {
          productsSelector.map(product => 
            <div key={product.id} className="bg-reactBlue text-lightBlue flex  flex-col p-2 m-2 rounded-lg justify-between">
              <div className="flex w-full items-center justify-between">
                <img src={product.image} alt="img" className="w-16 h-16 rounded-full"></img>
                <span>{product.title}</span>
                <span>{product.price}</span>
                <span>{product.category}</span>
              </div>
              <div className="flex p-1">
                <span>{product.description}</span>
              </div>
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
