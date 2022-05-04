
import React from 'react'

export default function Hero({cat}) {
    return (
        <>
            <div className="page-header has-image">
                <div className="page-header-content">
                    <div className="featured-image" style={{backgroundImage: 'url(/assets/img.png)'}}></div>

                    <div className="container">
                        <h1>{cat}</h1>
                        <nav className="breadcrumbs">
                            <a className="home" href="/"><span>Home</span></a>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span>{cat} </span>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
