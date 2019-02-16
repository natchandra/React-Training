import React, { Component } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';

class App extends Component {
  state={
    products:[
      {id:1, name:"iPhone", price:200},
      {id:2, name:"iPad", price:100 }
    ]
  }
  handleAdd = (product) =>{
    product.id = Math.floor(Math.random());
    let products = [...this.state.products,product]
    this.setState({
      products:products
    })
  }
  handleDelete = (id) =>{
    //console.log(id)
    let products = this.state.products.filter(item => {
      return item.id !== id
    })

    this.setState({
      products
    })
  }
  handleUpdate = (id, originalName) =>{
   // e.preventDefault();
   let products = this.state.products
    products = products.map(product => {
      if(product.name === originalName){
        product.name = id.name
        product.price = id.price
      }
      return product
    })
    this.setState({
      products
    })
   console.log(originalName)
    console.log(id.price)
  }
  render() {
    return (
      <div className="App">
        <h1>List Products</h1>
        {
          this.state.products.map(product => {
            return (
                <ProductList key={product.id} id = {product.id} name={ product.name } 
                  price={ product.price } 
                  onDelete={this.handleDelete}
                  onUpdate={this.handleUpdate}
                />
            
            )
            
          })
        }
        <AddProduct onAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
