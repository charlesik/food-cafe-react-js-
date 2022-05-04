import logo from './logo.svg';
import './App.css';

import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'jquery/dist/jquery';
import '@fortawesome/fontawesome-free/css/all.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';


// import $ from 'jquery/dist/jquery';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.css'




import Home from './components/home/home'
import Profile from './components/users/profile'
import SignUp from './components/auth/signup'
import LogIn from './components/auth/login'
import SingleProduct from './components/single-product/single-product'
import Cart from './components/cart/cart'
import AllCategories from './components/categories/allcategories';
import ProductsList from './components/productlist/productslist'
import Categories from './components/single-category/categories';
import ErrorPage from './components/error-page/error_page';

import { useSelector } from 'react-redux';
import Success from './components/success';
import Search from './components/search/search';



const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
    return (
      <Router>
        {/* <Fragment> */}
          {/* <div className="App"> */}
            {/* <div className=""> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/profile" component={Profile} />

                {/* <Route exact path="/login"> 
                  {user ? <Redirect to="/" /> : <LogIn/>}
                </Route> */}

                <Route exact path="/login"> 
                   <LogIn/>
                </Route>

                {/* <Route exact path="/signup">
                  {user ? <Redirect to="/" /> : <SignUp/> }
                </Route> */}

                <Route exact path="/signup">
                   <SignUp/>
                </Route>
                


                <Route path="/our-menu/product/:id">
                  <SingleProduct />
                </Route>
                {/* <Route exact path="/single-product" component={SingleProduct} /> */}
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/categories" component={AllCategories} />
                <Route path="/category/:categories" component={Categories}/>

                <Route exact path="/our-menu" component={ProductsList} />
                <Route exact path="/success" component={Success} />
                <Route exact path="/search" component={Search} />
                <Route path="*" component={ErrorPage} />,

              </Switch>
            {/* </div> */}
          {/* </div> */}
        {/* </Fragment> */}
      </Router>
    );
  
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
  
//   );
// }

