import React, { Component } from 'react'

export class UserNav extends Component {
    render() {
        return (
            <div>
                <div data-testid="userNavbar">
                <span >Furniture store</span>
                <ul>
                    <li>
                        <a href="/home" 
                        data-testid="furnitureHomeButton">
                        Home
                        </a>
                    </li>
                    <li>
                        <a href="/cart" 
                        
                        data-testid="furnitureCartButton">
                            Cart
                        </a>
                    </li>
                    <li>
                        <a href="/orders" 
                        
                        data-testid="furnitureOrderButton">
                            My order
                        </a>
                    </li>
                </ul>
                <span data-testid="logoutButton">
                    <a href="/login">
                    Logout
                    </a>
                </span>
                </div>
                
            </div>
            
        )
    }
}

export default UserNav
