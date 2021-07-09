import React, { Component } from 'react'

export class AdminNav extends Component {
    render() {
        return (
            <>
                <div data-testid="adminNavbar">
                <span >Furniture store</span>
                <ul>
                    <li>
                        <a href="/admin" 
                        
                        data-testid="adminproductButton">
                        Products
                        </a>
                    </li>
                    <li>
                        <a href="/admin/orders" 
                        
                        data-testid="adminOrderButton">
                            Orders
                        </a>
                    </li>
                </ul>
                <span data-testid="logoutButton">
                    <a href="/login">
                    Logout
                    </a>
                </span>
                </div>
            </>
            
        )
    }
}

export default AdminNav
