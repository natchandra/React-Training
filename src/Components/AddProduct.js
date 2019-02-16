import React, { Component } from 'react';

class AddProduct extends Component {
    state={
        name:'',
        price:''
    }
    handleChange = (e) =>{
        //console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state)
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onAdd(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Product Name: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                    <br />
                    <label>Product Price:</label>
                    <input type="number" id="price" value={this.state.price} onChange={this.handleChange}/>
                    <br />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;