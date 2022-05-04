import React, { Component } from 'react'
import './cta.css'

export default class ContentArea extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="content-area w-padding2 bg-light" >
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-8 col-md-8">
                                <div className="wantToWork-caption wantToWork-caption2">
                                    <h2>You can order by calling us on phone</h2>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3">
                                <a href="tel: +234 810 683 2108" className="btn btn-black f-right">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}