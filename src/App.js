import React, { Component } from 'react';

import Header from './Components/Header/Header.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Form from './Components/Form/Form.jsx'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg',
          productName: "Potato",
          price: 123
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCHy6IDYba_G6KxAHnhGHf4-5RUmNEPm97a4C9wMmVf2RRzhT',
          productName: "Chicken",
          price: 3123
        },
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg',
          productName: "Potato",
          price: 123
        }, 
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg',
          productName: "Potato",
          price: 123
        }, 
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg',
          productName: "Potato",
          price: 123
        },
         {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg',
          productName: "Potato",
          price: 123
        }, 
        {
          img: 'https://images-na.ssl-images-amazon.com/images/I/41SnI3JpZKL._SX355_.jpg',
          productName: "Potato",
          price: 123
        }
      ]
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory')
    .then(res => {
      this.setState({ inventory: res.data })
    })
    .catch(err => console.log('bad thing'))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
        <Dashboard inventory={this.state.inventory} />
        <Form />
        </div>

      <>
      <nav>

      </nav>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/' exact component={Dashboard} />
      </Switch>
      </>
      </div>
    );
  }
}

export default App;
