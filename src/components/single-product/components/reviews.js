import React, {Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';

const Reviews = ({product}) => {
    return(
        <>
                            <div className="panel with-nav-tabs panel-default woocommerce-tabs mt-5">
                                <Tabs id="controlled-tab-example" defaultActiveKey="description" className="mb-3">
                                    <Tab eventKey="description" title="Description">
                                        <div className="tab-content">
                                            <div className="" id="tab1default">
                                                <h2>Description</h2>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    </Tab>



                                    <Tab eventKey="reviews" title="Reviews">
                                        <div className="" id="tab3default">
                                            <h2 className="woocommerce-Reviews-title">Reviews</h2>
                                            <p>There are no reviews yet.</p>
                                            <h3 id="reply-title" className="comment-reply-title mrgtop40">Be The First To Review Our {product.name}</h3>
                                            <div id="reviews">
                                                <div id="review_form_wrapper">
                                                    <div id="review_form">
                                                        <div id="respond" className="comment-respond">
                                                            <form id="commentform" className="comment-form" noValidate="">
                                                                <div className="comment-form-rating">
                                                                    <p>
                                                                        <label>Your Rating</label>
                                                                    </p>
                                                                    <p className="stars">
                                                                        <span>
																			<a className="star-1" href="#">1</a>
																			<a className="star-2" href="#">2</a>
																			<a className="star-3" href="#">3</a>
																			<a className="star-4" href="#">4</a>
																			<a className="star-5" href="#">5</a>
																		</span>
                                                                    </p>
                                                                </div>
                                                                <p className="comment-form-comment">
                                                                    <label htmlFor="comment">Review <span className="required">*</span></label>
                                                                    <textarea placeholder="Write Your Comments..." id="comment" name="comment" cols="45" rows="8" required=""></textarea>
                                                                </p>
                                                                <p className="comment-form-author">
                                                                    <input id="author" name="author" defaultValue="" placeholder="Your Name" size="30" required="" type="text"/>
                                                                </p>
                                                                <p className="comment-form-email">
                                                                    <input id="email" name="email" defaultValue="" placeholder="Email Address" size="30" required="" type="email"/>
                                                                </p>
                                                                {/* <p className="comment-form-phone">
                                                                    <input id="phone" name="phone" placeholder="Phone Num" size="30" type="tel" defaultValue=""/>
                                                                </p> */}
                                                                <div className="clearfix"></div>
                                                                <p className="form-submit">
                                                                    <input name="submit" id="submit" className="submit" defaultValue="Submit Now" type="submit"/>
                                                                </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                            
        </>
    )
}

export default Reviews;