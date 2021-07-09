import React, { Component } from 'react'
import UserNav from '../UserNav/UserNav'
export class UserOrder extends Component {
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
    render() {
        const {content}=this.state
        
          
        return (
            <>
            <UserNav/>
            <div data-testid='furnitureOrderBody'>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Qantity</th>
                            <th>TotalPrice</th>
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
                                            <td>Number({product.price})*Number({product.quantity})</td>
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

export default UserOrder
