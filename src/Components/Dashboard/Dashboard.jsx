import React, { Component } from 'react'

import './Dashboard.css'
import Product from '../Product/Product.jsx'
import axios from 'axios';

class Dashboard extends Component {
    constructor () {
        super ()

        this.state ={
            inventory: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/inventory')
        .then(res => {
            this.setState({ inventory: res.data})
        })
        .catch(err => console.log('error:', err))
    }
    
    render () {
        return (
            <div className="mainBox">
                {this.props.inventory.map(product => <Product key={product.product_id} id={product.product_id} img={product.img} name={product.name} price={product.price} />)}
                
            </div>
        )
    }
}

export default Dashboard