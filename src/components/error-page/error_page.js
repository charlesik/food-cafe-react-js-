import React from 'react'
import './error_page.css'

function ErrorPage() {
    return (
        <div className="App-header">
            <div className=" align-items-center ">
                <div className="container">
                    <div className="spider">
                        <i className="fas fa-spider"></i>
                    </div>

                    <h1 className=" align-items-center" >
                        <span className="num">4 </span>
                        <i className="fas fa-cog text-success"></i>
                        <span className="num"> 4</span>
                    </h1>
                    <p>Sorry, the page you were trying to view does not exist.</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
