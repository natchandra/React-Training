import React, { Component } from 'react';
import './App.css';

class ProductItem extends Component {
  state={
    isEdit: false
  }
  onEdit = () => {
    this.setState({
      isEdit: true
    })
    //console.log(this.state.name)
  }
  onEditSubmit = (e) =>{
    e.preventDefault();
   // console.log("nama")
   // console.log(this.state.name)
    this.props.onEdit(this.nameInput.value, this.priceInput.value, this.props.name)

    this.setState({
      isEdit:false
    })
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  render() {
    const { name, price, onDelete} = this.props
    return (
      <div key={name}>
      {
        this.state.isEdit ? 
        (
          <form onSubmit={this.onEditSubmit}>
            <input placeholder="name" id="name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/> <br />
            <input placeholder="price" id="price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
            <button>Save</button>
          </form>
        ) 
        : (
          <div>
            <span>{name}</span> {` | `} 
            <span>{price}</span> {` | `}
            <button onClick={() => onDelete(name)} >Delete</button> {` | `}
            <button onClick={this.onEdit}>Edit</button>
          </div>
        )
      }
        
      </div>
    );
  }
}

export default ProductItem;
