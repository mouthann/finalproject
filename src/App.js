import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Notfound from './Components/Notfound/Notfound';



createBrowserRouter ([
  {path:'/', element: <Layout />, children:[
    {path: 'home', element:<Home />},
    {path: 'login', element:<Login />},
    {path: 'products', element:<Products />},

    {path: 'register', element:<Register />},
    {path: 'categories', element:<Categories />},
    {path: 'brands', element:<Brands />},
    {path: 'cart', element:<Cart />},
    {path: '*', element:<Notfound />},

  ]},
])
function App() {
  return (
    <div className="App">
      <h1>Welcome to this website</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
