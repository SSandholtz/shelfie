import React, { Component } from 'react'

import './Dashboard.css'
import Product from '../Product/Product.jsx'

class Dashboard extends Component {
    
    render () {
        return (
            <div className="mainBox">
                {this.props.inventory.map(product => <Product key={product.product_id} id={product.product_id} img={product.img} name={product.name} price={product.price} />)}
                
            </div>
        )
    }
}

export default Dashboard