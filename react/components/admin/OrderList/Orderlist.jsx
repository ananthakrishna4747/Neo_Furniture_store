import React, { Component } from 'react'
import AdminNav from '../AdminNav/AdminNav'

export class Orderlist extends Component {
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
            <AdminNav/>
            <div data-testid='adminOrderBody'>
                <table>
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User ID</th>
                        <th>Furniture Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            content.map((order)=>{
                                return(
                                    <>
                                    {
                                        <tr>
                                            <td>{order.orderId}</td>
                                            <td>{order.userId}</td>
                                            <td>{order.ProductName}</td>
                                            <td >{order.price}</td>
                                            <td>{order.quantity}</td>
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

export default Orderlist
