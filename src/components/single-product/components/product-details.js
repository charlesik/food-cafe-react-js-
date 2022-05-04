import { Add, Remove } from '@material-ui/icons'
import React, { Component } from 'react'
import styled from 'styled-components'
import { useState, useEffect} from 'react';
import { addProduct, clearCart } from '../../../redux/cartRedux';
import {useDispatch} from 'react-redux'
import cn from 'classnames'

import './details.css'

const AddContainer = styled.div`
width:50%;
display: flex;
align-items:center;
justify-content:space-between
`;
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight: 700;
`;
const Amount = styled.span`
    width:50px;
    height:50px;
    border-radius:5px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;
const Button = styled.button`
    font-weight: 500;
    color: #fff;
    text-align: center;
    display: inline-block;
    min-width: 170px;
    height: 50px;
    line-height: 52px;
    border-radius: 3px;
    padding: 0 20px;
    background-color: #121d2f;
    text-transform: capitalize;
    border: 0;
    box-shadow: none;
    transition: 0.5s;
    margin-left:20px;

    
`;


const ProductDetails = ({product})=>{
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [clicked, setClicked ] = useState(false)

    

    const handleQuantity = (type) =>{
        if(type === "dec"){
          quantity>1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }

    const handleClick =() =>{
        dispatch(
         addProduct({...product, quantity})  
        //  addProduct({product, quantity, price:product.price*quantity })  
        )

        setClicked(true)
        // console.log(addProduct)
    }
    
    return(
        <React.Fragment>
            <div className="mf-product-details clearfix">
                <div className="product-image">
                    <div className="gallery">
                        <a href={product.image} className="img-pop-up main">
                            <img src={product.image} alt="" className=""/>
                        </a>

                        <a href={product.featured_image1} className="img-pop-up t-one">
                            <img src={product.featured_image1} alt="" className=""/>
                        </a>

                        <a href={product.featured_image2} className="img-pop-up t-two">
                            <img src={product.featured_image2} alt="" className=""/>
                        </a>

                        <a href={product.featured_image3} className="img-pop-up t-three">
                            <img src={product.featured_image3} alt="" className=""/>
                        </a>

                        {/* {user ? <span>user logged in</span>:  <span> user not logged in</span>} */}
                        {/* {product.featured_image3 && <img src={product.featured_image3} alt="" className="t-three"/>} */}
                        {/* <img src={product.featured_image2} alt="" className="t-three"/> */}
                    
                    </div>
                    
                    {/* <div className="d-flex"> */}
                    {/* <img src={product.featured_image1} alt=""/> */}
                    {/* <img src={product.featured_image2} alt=""/> */}
                    {/* </div> */}
                    
                </div>
                <div className="product-summary entry-summary">
                    <h2 className="product_tiexport default function tle entry-title">{product.name}</h2>
                    <p>{product.category}</p>
                    <p className="price">
                        {product.deleted_price && <del>$<span>{product.deleted_price}</span></del>}
                        <ins> $<span>{product.price}</span></ins>
                    </p>
                    <div className="woocommerce-product-details__short-description">
                        <p>{product.short_description}</p>
                    </div>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")} style={{cursor:'pointer'}}/>
                                <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")} style={{cursor:'pointer'}}/>
                        </AmountContainer>

                        <Button onClick={handleClick} onAnimationEnd={() => setClicked(false)} className={cn("add_to_cart", {clicked})}>Add to cart</Button>

                        {/* <Button onClick={clearCartItems} >Clear Cart</Button> */}
                    </AddContainer>
            
                
                </div>
            </div>

        </React.Fragment>
    )
    
}

export default ProductDetails