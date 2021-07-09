import React, { Component } from 'react'
import axios from 'axios'
export class Getpinefurniture extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/sai-nikshay/furnitures/db')
        .then((response)=>{
            console.log(response)
            this.setState({
                posts:response.data.categories
            })
        })
        .then(error=>{
            console.log(error)
        })
    }
    render() {
        const {posts}=this.state
        return (
            <div>
                {
                    posts.map((post,i)=>{
                        return(
                            <div key={i}>
                            {
                               
                                post.pine.map((t,i)=>{
                                    return(
                                        <div key={t.productId}>
                                            <img src={t.imageUrl} alt="furniture" width="200px"></img><br/>
                                            <span>{t.productName}</span> <span>Rs.{t.price}</span>
                                            </div>
                                    )
                                }
                                )
                            }
                            </div>
                        )
                        }
                    )
                }
            </div>
        )
    }
}

export default Getpinefurniture
