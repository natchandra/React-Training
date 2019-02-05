import React, { Component } from 'react';

class AddItem extends Component {
    state={
        name: '',
        price: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(this.state)
        this.props.AddItem(this.state)
        this.setState({
            name:'',
            price:''
        })
    }
    handleChange = (e) =>{
        //console.log(e.target.value)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        const {addProduct} = this.props
        return (
            <div>
                <hr />
                <h3>Add Product</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="name" id="name" onChange={this.handleChange} value={this.state.name}/> <br />
                    <input placeholder="price" id="price" onChange={this.handleChange} value={this.state.price}/>
                    <button onClick={addProduct}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddItem;