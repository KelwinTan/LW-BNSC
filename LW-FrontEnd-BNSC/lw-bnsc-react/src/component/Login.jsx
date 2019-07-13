import React, { Component } from 'react'
import '../assets/style.css'
import logo from "../assets/logo.png"
import LoadingScreen from './LoadingScreen';
import Axios from "axios";
import { Redirect } from "react-router-dom";

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: true,
            username: "",
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            gender: "",
            dob: "",
            profile: "",
            errors: [],
        }
    }
    handleLoading = () => {
        if (this.state.loadingScreen === true) {
            return <LoadingScreen />;
        } else {
            return null;
        }
    };

    authenticateRedirection = () => {
        if (localStorage.getItem("usertoken") !== null) {
            return <Redirect to={"/"}> </Redirect>;
        }
    };

    handleUsername = (event) => {
        const { name, value } = event.target;
        this.setState({ username: value });
        console.log(this.state);
    }
    handlePassword = (event) => {
        const { name, value } = event.target;
        this.setState({ password: value });
        console.log(this.state);
    }

    handleSubmit = () => {
        this.setState({ loadingScreen: true });
        const fd = new FormData();
        fd.append("username", this.state.username);
        fd.append("password", btoa(this.state.password));

        Axios.post("/api/login", fd).then(res => {
            this.setState({ loadingScreen: false });
            localStorage.setItem("usertoken", res.data.token);
            this.props.history.push("/");
        }).catch(err => {
            console.log(err.response)
            this.setState({ loadingScreen: false, errors: err.response.data });
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.authenticateRedirection()}

                <div id="order-container" style={{ width: "100vw" }}>
                    <div className="order-content" id="order-left">

                        <div style={{ textAlign: "center" }}>
                            <img style={{ width: "200px", height: "200px" }} src={logo} alt="logo" />
                        </div>
                        <h1 id="order-title">Login</h1>

                        <div className="form-content">
                            {this.state.errors["username"] !== null ? <p style={{ color: "red" }}>{this.state.errors["username"]}</p> : ""}
                            <input type="text" name="username" id="username" className="form-box" onChange={this.handleUsername} />
                            <label>Username*</label>
                        </div>

                        <div className="form-content">
                            {this.state.errors["password"] !== null ? <p style={{ color: "red" }}>{this.state.errors["password"]}</p> : ""}
                            <input type="password" name="password" id="password" className="form-box" onChange={this.handlePassword} />
                            <label>Password*</label>
                            <label className="err_label" id="password_err"></label>
                        </div>

                        <div className="form-content">
                            <button id="submit-button" onClick={this.handleSubmit} >Submit</button>
                        </div>
                    </div>

                </div>

                <div id="footer">
                    <p>Copyright &copy;</p>
                    <p>Designed By:Kelwin Tantono</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Login
