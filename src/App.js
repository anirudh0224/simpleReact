import logo from './logo.svg';
import './App.css';
import Firsst from './Components/Firsst';
import Other from './Components/Other';
import About from './Components/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlayMethods from './Components/Autoslider';
import Navbarweb from './Components/Navbarweb';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Countrytour from './Countrytour';
import Navbar from '../src/Components/Menulist/Navbar';
import ProductList from './Components/Menulist/ProductList';
import Cart from '../src/Components/Menulist/Cart';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
];
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (product, amount) => {
    setCartItems(cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    ));
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>

      <BrowserRouter>
        <Navbarweb cartCount={cartItems.length} toggleCart={() => setCartVisible(!cartVisible)} />
        <Switch>
          <Route exact path='/'> <Home /><About /> <Services /> <Portfolio /> <Contact /> </Route>
          <Route path='/About'> <About />  </Route>
          <Route path='/Services'> <Services /> </Route>
          <Route path='/Portfolio'> <Portfolio /> </Route>
          <Route path='/Countrytour'> <Countrytour />  </Route>
          <Route path='/Contact'> <Contact /> </Route>
        </Switch>
        <Footer />

      </BrowserRouter>


    </>
  )

}
const styles = {
  productGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
};



export default App;
