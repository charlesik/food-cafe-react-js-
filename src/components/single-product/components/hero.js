
import React from 'react'

const Hero = ({product}) => {
    return (
        <>
            <div className="page-header has-image">
                <div className="page-header-content">
                    <div className="featured-image" style={{background: `url("${product.image}")` }}></div>
                    <div className="container">
                        <h1>{product.name}</h1>
                        <nav className="breadcrumbs">
                            <a className="home" href="/"><span>Home</span></a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <a className="" href={`/category/${product.category}`}><span>{product.category}</span></a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span>{product.name}</span>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
