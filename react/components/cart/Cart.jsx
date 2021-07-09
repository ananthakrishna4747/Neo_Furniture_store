import React, { Component } from 'react'
import UserNav from '../UserNav/UserNav'
export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[]
        }
    }
    componentDidMount() {
        fetch('https://localhost:8000/')
          .then(res => res.json())
          .then(result => {
            this.setState({
              
              content: result
              
            });
          });
        }
        handleDeleteProduct=async (pid)=>{
          
            const response = await fetch(`http://localhost:8000/delete/${pid}`, {
              method: "DELETE",
            });
            return response.json();
          
    }
    render() {
        const {content}=this.state
        return (
            
            <>
            <UserNav/>
            <div data-testid='furnitureCartBody'>
                <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Qantity</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            content.map((product)=>{
                                return(
                                    <>
                                    {
                                        <tr>
                                            <td>{product.productName}</td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td ><button onClick={this.handleDeleteProduct(product.productId)}>🗑</button></td>
                                        </tr>
                                    }
                                    </>
                                )
                            }
                            )
            }
                        
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default Cart
