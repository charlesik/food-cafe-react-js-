import React, { Component } from 'react'
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import './testimonial.css'

export default class Testimonial extends Component {
    state={
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },			
            1024:{
                items:3
            },
            1200:{
                items:3
            }
        }
    }


    render(){
        return(
            <React.Fragment>
                <section className="bg-white">
                    <div className="container">
                        <div className="row d-flex align-items-center text-center justify-content-center">
                            <div className="col-12 ">
                                <div className="section-title mb-5 pb-4">
                                    <h2>Reviews from our Customers</h2>
                                </div>
                                
                            </div>
                        </div>
                        <OwlCarousel 
                        items={4} 
                        className="owl-theme testimonial px-1 px-lg-5" 
                        loop
                        nav 
                        margin={10} 
                        autoplay={true}
                        smartSpeed= {800}
                        autoplaySpeed= {2000}
                        navspeed= {1000}
                        paginationspeed= {1000}
                        slidespeed={1000}
                        dots={false} 
                        responsive={this.state.responsive}
                        >



                    


                    <div className="item p-3">

                        <div className="card h-100">
                            <div className="card-body ">
                                <p className="mb-4 qoute">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt provident accusamus corrupti cupiditate quidem reiciendis impedit alias aliquid dicta.
                                </p>
                                
                            </div>
                        </div>
                        <div className="media mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img  className="rounded-circle mr-2 header-profile-user img-fluid" src="/assets/users/user4.jpg"  />
                            </div>
                            
                            <div className="media-body ">
                                <p className="mb-1 h6 d-flex align-items-center justify-content-center">
                                    Testimonial 1
                                </p>
                                {/* <span className="text-muted">
                                    Testimonial 2
                                </span>  */}
                            </div>
                        </div>
                   
                    </div>
                    
                    <div className="item p-3">

                        <div className="card h-100">
                            <div className="card-body ">
                                <p className="mb-4 qoute">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt provident accusamus corrupti cupiditate quidem reiciendis impedit alias aliquid dicta.
                                </p>
                                
                            </div>
                        </div>
                        <div className="media mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img  className="rounded-circle mr-2 header-profile-user img-fluid" src="/assets/users/avatar-4.jpg"  />
                            </div>
                            
                            <div className="media-body ">
                                <p className="mb-1 h6 d-flex align-items-center justify-content-center">
                                    Testimonial 2
                                </p>
                                {/* <span className="text-muted">
                                    Testimonial 2
                                </span>  */}
                            </div>
                        </div>
                   
                    </div>

                    


                    <div className="item p-3">
                        <div className="card h-100">
                            <div className="card-body ">
                                <p className="mb-4 qoute">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt provident accusamus corrupti cupiditate quidem reiciendis impedit alias aliquid dicta.
                                </p>
                                
                            </div>
                        </div>
                        <div className="media mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img  className="rounded-circle mr-2 header-profile-user img-fluid" src="/assets/users/100_14.jpg"  />
                            </div>
                            
                            <div className="media-body ">
                                <p className="mb-1 h6 d-flex align-items-center justify-content-center">
                                    Testimonial 3
                                </p>
                                {/* <span className="text-muted">
                                    Testimonial 2
                                </span>  */}
                            </div>
                        </div>
                    </div>


                    <div className="item p-3">
                        <div className="card h-100">
                            <div className="card-body ">
                                <p className="mb-4 qoute">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt provident accusamus corrupti cupiditate quidem reiciendis impedit alias aliquid dicta.
                                </p>
                                
                            </div>
                        </div>
                        <div className="media mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img  className="rounded-circle mr-2 header-profile-user img-fluid" src="/assets/users/avatar-2.jpg"  />
                            </div>
                            
                            <div className="media-body ">
                                <p className="mb-1 h6 d-flex align-items-center justify-content-center">
                                    Testimonial 4
                                </p>
                                {/* <span className="text-muted">
                                    Testimonial 2
                                </span>  */}
                            </div>
                        </div>
                    </div>


                    <div className="item p-3">
                        <div className="card h-100">
                            <div className="card-body ">
                                <p className="mb-4 qoute">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt provident accusamus corrupti cupiditate quidem reiciendis impedit alias aliquid dicta.
                                </p>
                                
                            </div>
                        </div>
                        <div className="media mt-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <img  className="rounded-circle mr-2 header-profile-user img-fluid" src="/assets/users/avatar-3.jpg"  />
                            </div>
                            
                            <div className="media-body ">
                                <p className="mb-1 h6 d-flex align-items-center justify-content-center">
                                    Testimonial 5
                                </p>
                                {/* <span className="text-muted">
                                    Testimonial 2
                                </span>  */}
                            </div>
                        </div>
                    </div>

                    </OwlCarousel>
                    
                    
                    
                    
                    
                    </div>
                </section>
                </React.Fragment>
        )
    }
} 