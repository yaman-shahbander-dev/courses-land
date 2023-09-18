import React, { Component } from 'react';
import Navbar from '../UserSide/ReusableComponents/Navbar';
import { Link, withRouter } from 'react-router-dom';
import './formStyle.css';
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    // componentDidMount() {
    //     if (localStorage.getItem('user-info')) {
    //         this.props.history.push('panelControl');
    //     }
    // }

    GetEmailInput = event => {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    }

    GetPasswordInput = event => {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    }

    CheckValidity = () => {
        const emailRegularExpression = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!emailRegularExpression.test(this.state.email)) {
            swal({
                title: "Something went wrong",
                text: "Email is not valid",
                icon: "warning",
                dangerMode: true,
            });

            return false;
        } else if (this.state.password.length < 8) {
            swal({
                title: "Something went wrong",
                text: "Password should be above 8",
                icon: "warning",
                dangerMode: true,
            });

            return false;
        }

        return this.checkCredentials();
    }

    checkCredentials = () => {
        axios.post('http://127.0.0.1:8000/api/Login', this.state)
            .then((response) => {
                localStorage.setItem('user-info', JSON.stringify(response.data));
                this.props.history.push('panelControl');
                swal("Great!", "You are registered now!", "success");
            }).catch((error) => {
                swal({
                    title: "Something went wrong",
                    text: error.response.data.message,
                    icon: "warning",
                    dangerMode: true,
                });

                return false;
            });

        // this.props.history.push('panelControl');
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="layer" >
                    <h1 style={{ visibility: 'hidden' }}>log in hidden</h1>

                    <div className="main-agile1" style={{ position: 'relative', left: '150px', bottom: '39px' }}>
                        <div className="w3layouts-main">
                            <h2>Login</h2>
                            <div className="form">
                                <div className="email" >
                                    <input placeholder="E-Mail" name="Email" type="email" required="" onChange={this.GetEmailInput} />
                                    <span className="icons i1"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                </div>

                                <div className="email">
                                    <input placeholder="Password" name="Password" type="password" required="" onChange={this.GetPasswordInput} />
                                    <span className="icons i2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                                </div>

                                <button className="RegisterBtn"
                                    onClick={this.CheckValidity}>Login</button>
                            </div>

                            <div className="SignIn">
                                <p style={{ color: 'white' }}>Create new account?</p>
                                <Link to="/register">Register</Link>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="footer-w3l"></div>
                </div>
            </div>
        );
    };
}

export default withRouter(Login);
