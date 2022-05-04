import React, { Component } from 'react';
// import { register } from '../UserFunctions';
import TextInputGroup from './../TextInputGroup';
import classnames from 'classnames';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Navbar from './../layout/navbar'
import Navbar2 from './../layout/navbar2'
import './login.css'
import { Link, withRouter, useHistory } from 'react-router-dom';
import Footer from '../layout/footer';




class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      title: '',
      isLoading: false,
      user: JSON.parse(localStorage.getItem('user')),
      workspace: JSON.parse(localStorage.getItem('workspace')),
      errors: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const user = { 
      first_name: this.state.first_name, 
      last_name: this.state.last_name, 
      email: this.state.email,
      username: this.state.username,
      password: this.state.password, 
      password2: this.state.password2 }

    console.log(user)

    const project = {
      title: this.state.title,
      // workspace_id:localStorage.getItem('user_id').toString(),
      workspace_id: this.state.workspace.id,
      user_id: this.state.user.id,
    };
    

    axios.post('http://localhost:8000/api/auth/register/', user).then(
      (response) => {
        console.log(response);
        setTimeout(() => {
          this.setState({ isLoading: true });
        }, 2000);
        // this.props.history.push({
        //   pathname: '/login',
        //   // search: '?query=get-workspace',
        // });
      },
      (error) => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);
        console.log(error);
      }
    );
  };



  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { errors } = this.state;
    const isLoading = this.state.isLoading;
    // const info = localStorage.getItem('workspace_info').toString();

    return (
      <React.Fragment>
        <div className="home   header-sticky signup header-v4 hide-topbar-mobile">
            <div id="page" className="hfeed site">
              <Navbar2 />
              <div className="d-flex align-items-center justify-content-center" style={{padding: '70px 0 50px 0'}}>
                  <div className="container">
                    <div className="row signin_form d-flex align-items-center justify-content-between">
                    <div className="col-md-5">
                      <div className="side-image">
                        <img className="img-fluid" src="assets/flash-sale-colored.svg" alt="" />
                      </div>
                    </div>

                    <div className="col-lg-7">
                    <div>
                        <form noValidate onSubmit={this.handleSubmit} className="login_frm sign-up-frm">
                        <div className="text-center section-title">
                          <h2 className="text-muted">Sign Up</h2>
                        </div>
                        <div className="px-3 px-lg-5">
                          <TextInputGroup
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            type="text"
                            required="required"
                            placeholder="Firstname"
                            defaultValue={this.state.first_name}
                            onChange={this.handleChange}
                            error={errors.first_name} 
                            autoComplete="off"
                          />
                          <TextInputGroup
                            id="last_name"
                            label="Last Name"
                            name="last_name"
                            type="text"
                            required="required"
                            placeholder="Lastname"
                            defaultValue={this.state.last_name}
                            onChange={this.handleChange}
                            error={errors.last_name}
                            autoComplete="off"
                          />
                          <TextInputGroup
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            required="required"
                            placeholder="Email"
                            defaultValue={this.state.email}
                            onChange={this.handleChange}
                            error={errors.email} 
                            autoComplete="off"
                          />
                          <TextInputGroup
                            id="username"
                            label="Username"
                            name="username"
                            type="text"
                            required="required"
                            placeholder="Username"
                            defaultValue={this.state.username}
                            onChange={this.handleChange}
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
                            defaultValue={this.state.password}
                            onChange={this.handleChange}
                            error={errors.password}
                          />

                          <TextInputGroup
                            id="password2"
                            label="Confirm Password"
                            name="password2"
                            type="password"
                            required="required"
                            placeholder="Confirm Password"
                            defaultValue={this.state.password2}
                            onChange={this.handleChange}
                            error={errors.password2}
                          />
                          <button
                            type="submit"
                            className="btn signup-btn my-4"
                          >
                            Sign Up 
                            {isLoading ? (
                              <span className="ml-3">
                                <Spinner
                                  animation="border"
                                  variant="light"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </button>
                          <p className="text-left p-signin_form">
                            Already have an account?{' '} <a href="/login" className="text-underline ">Sign in to your Account</a>
                            {/* <a href="/login"></a> */}
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

          </React.Fragment>
    );
  }
}

export default SignUp;
