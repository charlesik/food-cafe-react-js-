import { ArrowForwardIosSharp } from '@material-ui/icons'
import React, { Component } from 'react'
import './banner.css'

export default class Banner extends Component{
    render(){
        return(
            <React.Fragment>
                
                    <div className="container-fluid">

                   
                        <div className="row ">
                            <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3">
                                <div className="banner-img d-flex align-items-center justify-content-center">
                                    <img src="/assets/products/product18.jpg" className="img-banner"/>
                                </div>
                                    
                            </div>

                            <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3" >
                                <div className="banner-img d-flex align-items-center justify-content-between" style={{background: 'url(/assets/products/product7.jpg)'}}>

                                    <div className="promo-text">
                                        <h2 className="text-white">Suyaaa</h2>
                                        <p className="text-white-50">Get available discount on meals</p>
                                        <a href="" className="promo-link">visit shop <ArrowForwardIosSharp className="promo-icon"/>
                                        <div className="promo-line"></div>
                                        </a>
                                    </div>

                                    <div>
                                        {/* <img src="/assets/Suya.jpg" className="promo-img"/> */}

                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-4 px-3 py-3 px-lg-3">
                                <div className="banner-img d-flex align-items-center justify-content-center">
                                <img src="/assets/products/product20.jpg" className="img-banner"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                
                    </React.Fragment>
        )
    
    }
}