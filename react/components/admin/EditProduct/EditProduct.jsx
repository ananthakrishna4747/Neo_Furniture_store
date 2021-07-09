import React, { Component } from 'react'
import AdminNav from '../AdminNav/AdminNav';

export class EditProduct extends Component {
    constructor() {
        super();
        this.state = {
          input: {
                    productName:'',
                    price:'',
                    description:'',
                    imageUrl:'',
                    quantity:''
                  }
        };
         
        
      }

      handleChange=(event)=> {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
      handleEdit=(event)=> {
        event.preventDefault();
       console.log(this.state);
       
      }
    render() {
        return (
            <>
            <AdminNav/>
            <div>
                {/* <img></img> */}
            </div>
            <div data-testid='addFurnitureBody'>
                <form onSubmit={this.handleEdit} >
                <span>ADD A NEW PRODUCT</span>
                <div>
                    <input 
                    type="text" 
                    name="productName" 
                    value={this.state.input.productName}
                    onChange={this.handleChange}
                    className="addProduct-control" 
                    placeholder="Product Name" 
                    data-testid="furnitureName" />
              </div>
              <div>
                    <input 
                    type="text" 
                    name="price" 
                    value={this.state.input.price}
                    onChange={this.handleChange}
                    className="addProduct-control" 
                    placeholder="Product Price" 
                    data-testid="furniturePrice" />
              </div>
              <div>
                    <input 
                    type="text" 
                    name="description" 
                    value={this.state.input.description}
                    onChange={this.handleChange}
                    className="addProduct-control" 
                    placeholder="Product Description" 
                    data-testid="furnitureDescription" />
              </div>
              <div>
                    <input 
                    type="text" 
                    name="imageUrl" 
                    value={this.state.input.imageUrl}
                    onChange={this.handleChange}
                    className="addProduct-control" 
                    placeholder="Image URL" 
                    data-testid="furnitureImageURL" />
              </div>
              <div>
                    <input 
                    type="text" 
                    name="quantity" 
                    value={this.state.input.quantity}
                    onChange={this.handleChange}
                    className="addProduct-control" 
                    placeholder="Product Quanity" 
                    data-testid="furnitureQuantity" />
              </div>
              <input type="submit" value="ADD" data-testid="addFurnitureButton"/>
              </form>
            </div>
            </>
        )
    }
}

export default EditProduct
