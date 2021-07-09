

import React from 'react'

const Product=(props)=> {
    return (
        <div>
            <div>
                    <img src={props.productData.imageUrl} alt="product"></img>
                </div>
                <div>
                    <span>
                        get 50% off on this product
                    </span>
                </div>
                <div>
                    {props.productData.productName}
                    Rs.{props.productData.price}
                    {props.productData.description}
                    <button>Add to Cart</button>
                    <button>Place Order</button>
                </div>
        </div>
    )
}

export default Product
