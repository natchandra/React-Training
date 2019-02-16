import React, { Component } from 'react';

class ProductList extends Component {
    state={
        isEdit: false,
    }
    handleEdit = (e) =>{
        this.setState({
            isEdit:true,
        })
    }
    handleChange = (e) =>{
        //console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.onUpdate(this.state, this.props.name,this.props.price)
        this.setState({
            isEdit: false
        })
    }
    render() {
        const { name, price, id, onDelete,onUpdate } = this.props
        return (
            <div className="container" key={id}>   
                {
                    this.state.isEdit ? (
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="name" defaultValue={name} onChange={this.handleChange}/>
                            <input type="number" id="price" defaultValue={price} onChange={this.handleChange}/>
                            <button onClick={() =>onUpdate(id)}>Update</button>
                        </form>    
                    ):(
                        <p>Product Name: { name }, Price: { price } 
                        <button onClick={() => onDelete(id) }>delete</button> 
                        <button onClick={this.handleEdit}>Edit</button>
                        </p>  
                    )
                        
                }
            </div>
        );
    }
}

export default ProductList;