import React, { Component } from 'react'
import axios from 'axios'

import './Form.css'

class Form extends Component {
    constructor () {
        super ()

        this.state = {
            img: '',
            name: '',
            price: 0
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value})
    }

    submit = (e) => {
        e.preventDefault()
        axios.post('/api/inventory', this.state)
            .then(res => {
                this.setState({
                    img: '',
                    name: '',
                    price: 0
                })
            })
            .catch(err => console.log(`Couldn't add product to catalog`))
    }

    render () {
        return (
            <div className="productForm">
                <form onSubmit={this.submit}>
                    <div className="previewImage" > </div>
                    <label htmlFor="img"> Image </label>
                    <input onChange={this.handleInput} type="text" name='img' />
                    <label htmlFor="name" > Product Name </label>
                    <input onChange={this.handleInput} type="text" name='name'  />
                    <label htmlFor="price" > Price </label>
                    <input onChange={this.handleInput} type="number" name='price'  />
                    <button type="reset"> Cancel </button>
                    <button type="submit"> Add to Inventory </button>
                </form>
            </div>
        )
    }
}

export default Form