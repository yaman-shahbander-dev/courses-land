import React, { Component } from 'react';
import Navbar from '../UserSide/ReusableComponents/Navbar';
import { Link, withRouter } from 'react-router-dom';
import './formStyle.css';
import swal from 'sweetalert';

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        token: '',
    }

    // componentDidMount() {
    //     if (localStorage.getItem('user-info')) {
    //         this.props.history.push('panelControl');
    //     }
    // }

    GetUsernameInput = event => {
        this.setState({
            ...this.state,
            username: event.target.value
        });
    }

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

        const UsernameLettersNumbers = /^\w+$/;

        if (this.state.username.length < 6) {
            swal({
                title: "Something went wrong",
                text: "Username should be six letters and above",
                icon: "warning",
                dangerMode: true,
            });

            return false;

        } else if (!UsernameLettersNumbers.test(this.state.username)) {
            swal({
                title: "Something went wrong",
                text: "Username should only be letters, numbers, and underscores",
                icon: "warning",
                dangerMode: true,
            });

            return false;
            //   Also need to check if username is unique
        } else if (!emailRegularExpression.test(this.state.email)) {
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

        axios.post('http://127.0.0.1:8000/api/UniqueUsername', this.state).then((response) => {
            if (response.data === 'exist') {
                swal({
                    title: "Something went wrong",
                    text: "Username is already exist",
                    icon: "warning",
                    dangerMode: true,
                });

                return false;
            }

            axios.post('http://127.0.0.1:8000/api/UniqueEmail', this.state).then((response) => {
                if (response.data === 'exist') {
                    swal({
                        title: "Something went wrong",
                        text: "Email is already exist",
                        icon: "warning",
                        dangerMode: true,
                    });

                    return false;
                } else {
                    return this.RegisterUserData();
                }
            });
        });

    }

    RegisterUserData = () => {
        let FCMtoken = localStorage.getItem('token');
        this.setState({ token: FCMtoken });

        axios.post('http://127.0.0.1:8000/api/Register', this.state)
            .then((response) => {
                localStorage.setItem('user-info', JSON.stringify(response.data));
                this.props.history.push('panelControl');
                swal("Great!", "You are registered now!", "success");

            })
            .catch((error) => {
                if (error.response.status === 422) {
                    if (error.response.data.errors.username != null) {
                        swal({
                            title: "Something went wrong",
                            text: error.response.data.errors.username[0],
                            icon: "warning",
                            dangerMode: true,
                        });

                        return false;
                    } else if (error.response.data.errors.email != null) {
                        swal({
                            title: "Something went wrong",
                            text: error.response.data.errors.email[0],
                            icon: "warning",
                            dangerMode: true,
                        });

                        return false;
                    } else if (error.response.data.errors.password != null) {
                        swal({
                            title: "Something went wrong",
                            text: error.response.data.errors.password[0],
                            icon: "warning",
                            dangerMode: true,
                        });

                        return false;
                    }
                }
            });

        // this.props.history.push('panelControl');
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="layer">
                    <h2 style={{ visibility: 'hidden' }}>Sign up hidden</h2>
                    <div className="main-agile1" style={{ position: 'relative', left: '150px' }}>
                        <div className="w3layouts-main">
                            <h2>Register</h2>
                            <div className="form">
                                <div className="email">
                                    <input placeholder="Username" name="username" type="text" required=""
                                        onChange={this.GetUsernameInput} />
                                    <span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>

                                <div className="email">
                                    <input placeholder="E-Mail" name="email" type="email" required=""
                                        onChange={this.GetEmailInput} />
                                    <span className="icons i1"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                </div>

                                <div className="email">
                                    <input placeholder="Password" name="password" type="password" required=""
                                        onChange={this.GetPasswordInput} />
                                    <span className="icons i2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                                </div>

                                <button onClick={this.CheckValidity} className="RegisterBtn">register</button>
                            </div>

                            <div className="SignIn">
                                <p style={{ color: 'white' }}>Have an account?</p>
                                <Link to="/login">Log-in</Link>
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

export default withRouter(Register);
