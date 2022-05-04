import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Product extends Component{

    state={
        product:this.props.product
    }
    render(){
        return(
        <>
        
        <div className="col-lg-3 col-md-6 col-sm-12">

            <div className="item p-3">
            <a href={`/our-menu/product/${this.props.id}`}>
                    <div className="card h-100 text-center">
                        <img  className="mr-2 card-img-top img-fluid img-loop" src={this.props.image}  />
                    </div>
                </a>
                <div className="my-3 text-left">
                    <a className="kt-widget5__title " href="">
                        {this.props.name}
                    </a>

                    <div className=" my-2">
                        <span className="mr-3 d-inline-block" style={{marginRight:"10px"}}>
                                <del> $ {this.props.deleted_price} </del>
                        </span>

                        {this.props.price ? 
                        <span className="kt-widget5__desc pl-4">$ { this.props.price}</span>: (
                                <span className="bg-danger text-white p-2">No price yet</span> 
                            )}
                    </div>
                                
                </div>
                <div className=" d-flex justify-content-between align-items-center mt-3">
                    {this.props.children}
                </div>
            </div>    

        </div>
        
        </>
        
        )
    }
}