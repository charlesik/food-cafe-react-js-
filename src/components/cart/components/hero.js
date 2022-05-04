
import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="page-header has-image">
                <div className="page-header-content">
                    <div className="featured-image" style={{backgroundImage: 'url(/assets/img.png)'}}></div>
                    <div className="container">
                        <h1>Cart</h1>
                        <nav className="breadcrumbs">
                            <a className="home" href="/"><span>Home</span></a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span>Cart</span>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
