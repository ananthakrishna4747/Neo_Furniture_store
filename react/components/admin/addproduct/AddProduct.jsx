import React, { Component } from 'react'
import AdminNav from '../AdminNav/AdminNav';

export class AddProduct extends Component {
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
      handleAdd=(event)=> {
        event.preventDefault();
       console.log(this.state);
       fetch('http://localhost:8000/', {
       method: 'post',

          headers: {

            'Accept': 'application/json',

            'Content-Type': 'application/json'

          },

          body: JSON.stringify({
            productName:this.state.productName,

            price: this.state.price,

            description: this.state.description,

            imageUrl: this.state.imageUrl,

            quantity: this.state.quantity

      })

    }).then((Response) => Response.json())

      .then((Result) => {

        if (Result.Status === 'Success')

                this.props.history.push("/Dashboard");

        else

          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')

      })

  }
       
      
    render() {
        return (
            <>
            <AdminNav/>
            <div>
                {/* <img></img> */}
            </div>
            <div data-testid='addFurnitureBody'>
                <form onSubmit={this.handleAdd} >
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

export default AddProduct
