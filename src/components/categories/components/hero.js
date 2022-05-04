
import React from 'react'

const Hero = ({category}) =>  {
    return (
        <>
            <div className="page-header has-image">
                <div className="page-header-content">
                    <div className="featured-image" style={{backgroundImage: 'url(/assets/img.png)'}}></div>
                    <div className="container">
                        <h1>Categories</h1>
                        <nav className="breadcrumbs">
                            <a className="home" href="/"><span>Home</span></a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span>Categories</span>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
