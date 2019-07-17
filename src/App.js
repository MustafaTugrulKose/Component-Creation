import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HeaderComponent,ProductCard} from './first';

class App extends Component {
  render(){
    const productprop = "Akdeniz Turları";
    return (
      <div className="App">
        <div class="container">
          <HeaderComponent></HeaderComponent>
          <ProductCard productName={productprop}></ProductCard>
        </div>
      </div>
    );
  }
}

export default App;
