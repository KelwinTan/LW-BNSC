import React, { Component } from 'react'
import '../assets/style.css'
import logo from "../assets/logo.png"
import LoadingScreen from './LoadingScreen';
import Axios from "axios";
import { Redirect } from "react-router-dom";

export class Register extends Component {
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


    handleUsername = (event) => {
        const { name, value } = event.target;
        this.setState({ username: value });
        console.log(this.state);
    }

    handleName = (event) => {
        const { name, value } = event.target;
        this.setState({ name: value });
        console.log(this.state);
    }

    handleEmail = (event) => {
        const { name, value } = event.target;
        this.setState({ email: value });
        console.log(this.state);
    }

    handlePassword = (event) => {
        const { name, value } = event.target;
        this.setState({ password: value });
        console.log(this.state);
    }

    handlePhone = (event) => {
        const { name, value } = event.target;
        this.setState({ phoneNumber: value });
        console.log(this.state);
    }

    handleGender = (event) => {
        const { name, value } = event.target;
        this.setState({ gender: value });
        console.log(this.state);
    }

    authenticateRedirection = () => {
        if (localStorage.getItem("usertoken") !== null) {
            return <Redirect to={"/"}> </Redirect>;
        }
    };

    componentDidMount() {
        this.setState({ loadingScreen: false });
    }


    handleDOB = (event) => {
        const { name, value } = event.target;
        this.setState({ dob: value });
        console.log(this.state);
    }


    handlePicture = event => {
        console.log(event.target.files);
        this.setState({
            profile: event.target.files
        });
    }

    handleSubmit = () => {
        this.setState({ loadingScreen: true });
        const fd = new FormData();
        fd.append("name", this.state.name);
        fd.append("username", this.state.username);
        fd.append("email", this.state.email);
        fd.append("password", btoa(this.state.password));
        fd.append("dob", this.state.dob);
        fd.append("phone", this.state.phoneNumber);
        if (this.state.profile !== null) {
            fd.append('picture', this.state.profile[0]);
        }

        Axios.post("/api/register", fd).then(res => {
            this.setState({ loadingScreen: false });
            this.props.history.push("/login");
        }).catch(err => {
            console.log(err.response)
            this.setState({ loadingScreen: false, errors: err.response.data });
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.authenticateRedirection()}
                {this.handleLoading()}
                <div id="order-container">
                    <div className="order-content" id="order-left">

                        <div style={{ textAlign: "center" }}>
                            <img style={{ width: "200px", height: "200px" }} src={logo} alt="logo" />
                        </div>
                        <h1 id="order-title">Registration Form</h1>

                        <div className="form-content">
                            {this.state.errors["username"] !== null ? <p style={{ color: "red" }}>{this.state.errors["username"]}</p> : ""}
                            <input type="text" name="username" id="username" className="form-box" onChange={this.handleUsername} />
                            <label>Username*</label>
                        </div>
                        <div className="form-content">
                            {this.state.errors["name"] !== null ? <p style={{ color: "red" }}>{this.state.errors["name"]}</p> : ""}
                            <input type="text" name="name" id="name" className="form-box" onChange={this.handleName} />
                            <label>Name*</label>
                            <label className="err_label" id="name_err"></label>
                        </div>

                        <div className="form-content">
                            {this.state.errors["email"] !== null ? <p style={{ color: "red" }}>{this.state.errors["email"]}</p> : ""}
                            <input type="text" name="email" id="email" className="form-box" onChange={this.handleEmail} />
                            <label>Email*</label>
                            <label className="err_label" id="email_err"></label>
                        </div>

                        <div className="form-content">
                            {this.state.errors["password"] !== null ? <p style={{ color: "red" }}>{this.state.errors["password"]}</p> : ""}
                            <input type="password" name="password" id="password" className="form-box" onChange={this.handlePassword} />
                            <label>Password*</label>
                            <label className="err_label" id="password_err"></label>
                        </div>

                        <div className="form-content">
                            <input type="text" name="telephone" id="telephone" className="form-box" defaultValue="08"
                                onChange={this.handlePhone} />
                            <label>Phone Number</label>
                            <label className="err_label" id="telephone_err"></label>
                        </div>

                        <div className="form-content">
                            <select id="gender" name="gender" className="form-box" onChange={this.handleGender}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <label>Gender</label>
                            <label className="err_label" id="gender_err"></label>
                        </div>
                        <div className="form-content">
                            <input type="date" onChange={this.handleDOB} />
                            <label>Date of Birth</label>
                            <label className="err_label" id="gender_err"></label>
                        </div>

                        <div className="form-content">
                            <input type="file" onChange={this.handlePicture} />
                            <label>Profile Picture</label>
                            <label className="err_label" id="gender_err"></label>
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

export default Register
