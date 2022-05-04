import React, { Component } from 'react';
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentYear: new Date().getFullYear()
        }
    }
    render(){
        return(
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="top-footer text-center">
                            {/* <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 mb-4 mb-lg-4">
                                    <div className="mb-4 text-white">
                                        <img src="/assets/logo-white.svg" className="img-fluid" />
                                    </div>
                                    <p className="text-muted text-small">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                </div>
                            </div> */}
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                        <div className="footer-top-cap text-center">
                                            <div className="mb-2 mb-lg-4 text-white">
                                                <a href="/">
                                                    <img src="/assets/logo-white.svg" className="img-fluid" />
                                                </a>
                                            </div>                                            
                                            <span><a href="/">Capat Restaurant</a></span>
                                            <p>Juhel Ogui Junction </p>
                                            <p>Enugu, Nigeria </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer text-center">
                        <div className="container text-muted py-3">
                            <div className="row">
                                
                                <div className="col-lg-6 col-md-6 align-items-center justify-content-center d-flex">
                                    <p className="copyright py-4 py-md-0 py-lg-0 mb-0">&copy; {this.state.currentYear} Capat. Designed by <a href="https://github.com/charlesik">Cyfa</a></p>
                                </div>

                                <div className="col-lg-6 col-md-6 align-items-center justify-content-center d-flex d-inline-block">
                                    Follow Us: 
                                    <ul className="list-inline ml-3 mb-0" style={{marginLeft: '10px'}}>
                                        <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-pinterest"></i></a></li>
                                        <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                               
                            </div>

                        </div>
                    </div>
                </footer>
                    
                </React.Fragment>
        )
    }
}

export default Footer;
