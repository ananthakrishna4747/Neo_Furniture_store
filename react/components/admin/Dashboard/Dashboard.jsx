import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[]
        }
        this.deleteStudent.bind()
    }
    
    handleAddEvent=(event)=>{
        this.props.history.push('/admin/addProduct');
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
    handleEditProduct=()=>{

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
            <AdminNav/>
            <div test-data-id='adminDashboard'>
                <table>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Furniture Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            content.map((product,i)=>{
                                return(
                                    <>
                                    <>
                                        {
                                            product.ash.map((t,i)=>{
                                                return(
                                                    <tr>
                                                       <td><img src={t.imageUrl} alt="furniture" width="100px"></img></td>
                                                       <td>{t.productName}</td> 
                                                       <td>{t.price}</td>
                                                       <td>{t.quantity}</td>
                                                       <td><button onClick={this.handleEditProduct}>✏</button></td>
                                                       <td ><button onClick={this.handleDeleteProduct(t.productId)}>🗑</button></td>
                                                    </tr>
                                                )
                                            }
                                            )
                                            
                                        }
                                    </>
                                    <>
                                    {
                                            product.oak.map((t,i)=>{
                                                return(
                                                    <tr>
                                                       <td><img src={t.imageUrl} alt="furniture" width="100px"></img></td>
                                                       <td>{t.productName}</td> 
                                                       <td>{t.price}</td>
                                                       <td>{t.quantity}</td>
                                                       <td><button onClick={this.handleEditProduct}>✏</button></td>
                                                       <td ><button onClick={this.handleDeleteProduct(t.productId)}>🗑</button></td>
                                                    </tr>
                                                )
                                            }
                                            )
                                            
                                        }
                                    </>
                                    <>
                                    {
                                            product.pine.map((t,i)=>{
                                                return(
                                                    <tr>
                                                       <td><img src={t.imageUrl} alt="furniture" width="100px"></img></td>
                                                       <td>{t.productName}</td> 
                                                       <td>{t.price}</td>
                                                       <td>{t.quantity}</td>
                                                       <td><button onClick={this.handleEditProduct}>✏</button></td>
                                                       <td ><button onClick={this.handleDeleteProduct(t.productId)}>🗑</button></td>
                                                    </tr>
                                                )
                                            }
                                            )
                                            
                                        }
                                    </>
                                    <>
                                    {
                                            product.glass.map((t,i)=>{
                                                return(
                                                    <tr>
                                                       <td><img src={t.imageUrl} alt="furniture" width="100px"></img></td>
                                                       <td>{t.productName}</td> 
                                                       <td>{t.price}</td>
                                                       <td>{t.quantity}</td>
                                                       <td><button onClick={this.handleEditProduct}>✏</button></td>
                                                       <td ><button onClick={this.handleDeleteProduct(t.productId)}>🗑</button></td>
                                                    </tr>
                                                )
                                            }
                                            )
                                            
                                        }
                                    </>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {/* <img></img> */}
                <button test-data-id='addFurnitureButton'
                onClick={this.handleAddEvent} >
                    Add Product
                </button>
            </div>
            </>
        )
    }
}

export default withRouter(Dashboard)
