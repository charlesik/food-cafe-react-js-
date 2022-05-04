
import React, { Component, useState } from 'react';
// import { register } from '../UserFunctions';
import TextInputGroup from './../TextInputGroup';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import Navbar from './../layout/navbar'
import Navbar2 from './../layout/navbar2'
import {useDispatch, useSelector} from 'react-redux';
import { Spinner } from 'react-bootstrap';


import './login.css'
import { login } from '../../redux/apiCalls';
import Footer from '../layout/footer';

const LogIn = () =>{
  // constructor() {
  //   super();
    const state = {
      email: '',
      username: '',
      password: '',

      errors: {},
    };

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error } = useSelector((state) => state.user);
    // this.onChange = this.onChange.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', JSON.stringify(login(dispatch, {username, password})));
    // localStorage.setItem('username', JSON.stringify(username));
    login(dispatch, {username, password})
    


    // const { email, password, username, errors } = this.state;

    // if (email === '') {
    //   this.setState({ errors: { email: 'Email is required' } });
    //   return;
    // }

    // if (username === '') {
    //   this.setState({ errors: { username: 'Username is required' } });
    //   return;
    // }

    // if (password === '') {
    //   this.setState({ errors: { password: 'Password is required' } });
    //   return;
    // }

    

    // console.log(this.state);
    // fetch('http://127.0.0.1:8000/api/register', {
    //   method: 'post',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // }).then(function (response) {
    //   response.json().then(function (resp) {
    //     console.log(resp);
    //   });
    // });
  };

  // const onChange = (e) => {
  //   e.preventDefault();

  //   ({ [e.target.name]: e.target.value });
  // };
  

      const  errors  = state.errors;

      return (
        <React.Fragment>
          <div className="home   header-sticky  header-v4 hide-topbar-mobile">
              <div id="page" className="hfeed site">
                <Navbar2 />
                  <div className="d-flex align-items-center justify-content-center" style={{padding: '50px 0 50px 0'}}>
                    <div className="container">
                      <div className="row signin_form d-flex align-items-center justify-content-between">
                      <div className="col-md-6">
                        {/* <div className="card">
                          <div className="card-body"> */}
                          <div className="side-image d-flex align-items-center justify-content-between">
                          <img className="img-fluid" src="/assets/icon-startup.svg" alt=""  width="100%"/>
                        </div>                        
                        {/* </div>
                        </div> */}
                      </div>
  
                      <div className="col-lg-6 px-4 px-lg-5 mb-5">
                        <div className="card ">
                          <div className="card-body">                        
                            <form noValidate onSubmit={onSubmit} className="login_frm">
                              <div className="text-center section-title">
                                <h2 className="text-muted ">Sign In</h2>
                              </div>
                              <div className="px-3">
                            {/* <TextInputGroup
                              // label="Email"
                              name="email"
                              type="email"
                              required="required"
                              placeholder="Your-workspace-URL"
                              defaultValue={this.state.email}
                              onChange={this.onChange}
                              error={errors.email}
                            /> */}
                            <TextInputGroup
                              id="username"
                              label="Username"
                              name="username"
                              type="text"
                              required="required"
                              placeholder="Username"
                              defaultValue={state.username}
                              onChange={(e) => setUsername(e.target.value)}
                              error={errors.username}
                              autoComplete="off"
                            />
                            <TextInputGroup
                              id="password"
                              label="Password"
                              name="password"
                              type="password"
                              required="required"
                              placeholder="Password"
                              defaultValue={state.password}
                              onChange={(e) => setPassword(e.target.value)}
                              error={errors.password}

                            />
                            <button
                              type="submit"
                              className="btn login-btn my-4"
                            >
                              Login 
                            {isFetching && (
                              <span className="ml-3 spinner">
                                <Spinner
                                  animation="border"
                                  variant="dark"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                            {/* {isFetching ? (
                              <span className="ml-3 spinner">
                                <Spinner
                                  animation="border"
                                  variant="dark"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : (
                              <span></span>
                            )} */}
                            </button>

                            {/* { error && <p style={{color: 'red'}}>Something went wrong</p> } */}
                            <p className="text-left p-signin_form">
                              Don't have an account?{' '} <a href="/signup" className="text-underline">Sign Up</a>
  
                              {/* <a href=""></a> */}
                            </p>
  
                            <p className="text-left p-signin_form">
                              <a href="">Forgot Password?</a>
                            </p>
                          </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          
          <Footer/>
          </div>

          </React.Fragment>
  
      );
    

}

export default LogIn;

