import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Navbar, Products, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

    // States
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    // Function to fetch the products
    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    };

    // Funtion to get the cart
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    // Funtion to handle the add to cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);

        console.log((cart));
    }

    // Funtion to update cart
    const handleUpdateCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const emptyCart = async () => {
        const { cart } = commerce.cart.empty();

        setCart(cart);
    }

    // fetchProducts();
    // fetchCart();

    // Run this everytime App.js is rendered
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);


    const customProducts = [
        {
            name: 'Watch',
            description: 'This is a watch',
            image: 'some image',
            price: {
                formatted_with_symbol: '$50'
            }
        },
        {
            name: 'Fishing pool',
            description: 'Reel it in',
            image: 'some image',
            price: {
                formatted_with_symbol: '$50'
            }
        },
    ];

    console.log('CustomProduct: ', customProducts);
    console.log("Product: ", products);
    console.log('Cart: ', cart);

    
    // The component that is returned
    return (
        <Router>
            <div>
                <Navbar cartTotal={cart.total_items} />
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} onAddToCart={handleAddToCart} customProducts={customProducts} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart 
                            cart={cart} 
                            handleUpdateCart={handleUpdateCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                            emptyCart={emptyCart}
                        />
                    </Route>
                    <Route exact path='/checkout'>
                        <Checkout />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
