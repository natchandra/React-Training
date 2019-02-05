import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

const products =[
  { name: 'ipad', price: 200 },
  { name: 'iphone', price: 650 }
]
localStorage.setItem('products', JSON.stringify(products))

class App extends Component {
  state = {
    products: [],
    isEdit: false
  }
  componentWillMount() {
    this.getProducts()
  }
  getProducts(){
    const products = JSON.parse(localStorage.getItem('products'))
    console.log(products)
    this.setState({
      products: products
    })
  }
  handleDelete = (name) =>{
    //console.log(name);
    let products = this.state.products.filter(product => {
      return product.name !== name
    })
    this.setState({
      products: products
    })
  }
  handleAdd = (product) =>{
    let products = [...this.state.products,product]
    this.setState({
      products
    })
  }

  handleEdit = (name,price, originalName) =>{
    //console.log(product,original);
    //let products = [...this.state.products,product]
    let products = this.state.products
    products = products.map(product => {
      if(product.name === originalName){
        product.name = name
        product.price = price
      }
      return product
    })
    this.setState({
      products
    })
    /*let products =[...this.state.products]
    //let products = this.getProducts()
    products = this.state.products.map(product => {
      if(product.name === name){
        product.name = name
        product.price = price
      }
      return product
    })
    this.setState({
      products : products
    })*/
  }
  render() {
    return (
      <div className="App">
        <h1>Product Manager</h1>
        {this.state.products.map(product =>{
          return(
            <ProductItem key={product.name} name={product.name} 
              price={product.price} 
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
              />
              
          )
        } )}
        <AddItem AddItem={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
