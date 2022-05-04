import React, { Component, useState, useEffect } from 'react'

import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './recommended.css'
import {RecommendedProducts} from './../../data'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
import LikeButton from './likebutton';








class Featured extends Component {
  // function Sidebar() {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
        categories: [],
        products: [],
        Open: false,
        productsData: [],
        itemsToShow: 0,
        usersToShow: 0,
        expanded: false,
        userExpanded: false,
    };

    this.showMore = this.showMore.bind(this);
    this.showMoreUsers = this.showMoreUsers.bind(this);
  }




  componentDidMount() {
    // setInterval(() => {
    axios
      .get('http://127.0.0.1:8000/api/products/?is_popular=True')
      .then((response) => {
        //   console.log(response.data)
        this.setState({
            productsData: response.data,
        });

        // console.log(this.state.productsData);
      })
      .catch((error) => {
        console.log('Error');
      });
// }, 5000);
    this.getPopularProducts();
    this.showMoreUsers();
    this.showMore();
    
  }



  getPopularProducts() {
    const products = {
        products: this.state.products,
    };

    
  }

  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({
          itemsToShow: this.state.categoriesData.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 4, expanded: false });
  }

  showMoreUsers() {
    this.state.usersToShow === 4
      ? this.setState({
          usersToShow: this.state.productsData.length,
          userExpanded: true,
        })
      : this.setState({ usersToShow: 4, userExpanded: false });
  }

//   style={{background: '#f2f2f2'}}

  render() {

    return (
        <section className="slider">
		
				<div className="home_slider_container">

            
            {this.state.productsData.sort(()=> Math.random() - Math.random())
    .slice(0, 3).map((prod, i)=>(
<div className="">
         <div className="container item h-100">

                    <div className="row  d-flex align-items-center justify-content-between">




                        <div className="col-lg-6 col-md-7 col-sm-12 flex-wrap">
                            <div className="subtext">lorem Ipsum Dolor</div>
                            <div className="caption">lorem Ipsum Dolor <br/>kscs snksc </div>
                            <div className="paratext">Get started, Create an account and start enjoying our service</div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-12 d-none d-lg-block">
                            <div className=" hero-main-img d-flex align-items-center justify-content-between" style={{width: '500px'}}>
                                <div className=" hero-main-img-div">

                                <img src="/assets/FoodPhotography.jpg" className="img-fluid" style={{height: '470px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ', objectFit:'cover', border: '4px solid #000'}} loading="lazy"/>

                                </div>
                            </div> 
                        </div>



                    </div>

                </div> 
                </div>
    ))}
            
            </div>
            </section>

    );
  }
}

export default Featured;
