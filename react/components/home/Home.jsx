import React, { Component } from 'react'

import UserNav from '../UserNav/UserNav'

import Product from '../Product/Product'
class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[],
             display:false
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
        const { content,display } = this.state;
        return (
            <div>
                <UserNav/>
               <span>WELCOME HOME </span>
               
               <div data-testid="furnitureHomeBody">
               
                    {content.map((product)=>{
                                    return(
                                        <>
                                        {display && <Product productData={product}/>}
                                        {!display && <div key={product.productId} onClick={()=>this.setState({display:true})}>
                                            <img src={product.imageUrl} alt="furniture" width="200px"></img><br/>
                                            <span>{product.productName}</span> <span>Rs.{product.price}</span>
                                            </div>
                                        }
                                        </>
                                    )
                                }
                                )
                }
                
               </div>
            </div>
        )
    }
}

export default Home
