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
import {PopularProductsItems} from '../../data'

import { Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'
import LikeButton from './likebutton';








class PopularProducts extends Component {
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
      .get('https://sage-server.herokuapp.com/api/products/?is_popular=True')
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
// {this.state.productsData.sort(()=> Math.random() - Math.random())


  render() {

    return (

            <section style={{background:'#f2f2f2'}}>
                <div className="container">
                    <div className="row d-flex align-items-center text-center justify-content-center mb-4 pb-4">
                        <div className="col-12 mb-2 pb-2 section-title">
                            <h2>Popular Products</h2>
                        </div>
                        <div className="col-12">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, a deserunt quaerat quidem ut officiis!</p>
                        </div>
                    </div>

                    <div className="row category d-flex justify-content-center align-items-center">
                        <div className="col-lg-5">
                            <div className="d-flex align-items-center justify-content-between">
                                <img className="img-fluid" src="/assets/icon-startup.svg" alt=""  width="100%"/>

                            </div>

                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                            {this.state.productsData.sort(()=> Math.random() - Math.random())
                                .slice(0, 3).map((prod, i)=>(
                                    <div className="col-lg-12 col-md-6 col-sm-12" key={prod.id}>
                                        <div className="item p-3">

                                            <div className="media d-flex align-items-center justify-space-between">
                                                <div className="kt-widget5__pic"> 
                                                    <a href={`/our-menu/product/${prod.id}`}>
                                                        <img  className="mr-2 img-fluid cat-img-loop img-sty" src={prod.image} alt={prod.name}  />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    {/* <div className="card-body "> */}
                                                    <h4>
                                                    <a href={`/our-menu/product/${prod.id}`}>

                                                            {prod.name}
                                                        </a>
                                                        </h4>
                                                    <div className=" my-2">
                                                        <span className="mr-3" style={{marginRight:"10px"}}>
                                                            <del> $<span>{prod.deleted_price}</span> </del>
                                                        </span>

                                                        {prod.price ? <span className="kt-widget5__desc pl-4">
                                                        $<span>{ prod.price}</span>
                                                        </span>: (
                                                            <span className="bg-danger text-white p-2">No price yet</span> 
                                                        )}
                                                    </div>
                                                        <p className="kt-widget5__desc">
                                                            {prod.short_description}
                                                        </p>
                                                        <div className=" pop_prod_btns d-flex justify-space-between menu-btns align-items-center mt-3"> 
                                                            {/* <button className="btn btn-outline-dark "><i className="far fa-heart"></i></button> */}

                                                            <LikeButton /> 

                                                            
                                                            <a className="btn btn-outline-dark order" href={`/our-menu/product/${prod.id}`} style={{padding: '5px 15px', width: 'auto', borderRadius: '2px'}}>
                                                                <i className="fas fa-cart-plus ml-1"></i>
                                                            </a>
                                                        
                                                        </div> 

                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>   
      
    );
  }
}

export default PopularProducts;
