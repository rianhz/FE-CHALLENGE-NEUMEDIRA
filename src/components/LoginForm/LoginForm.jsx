import React from "react";
import "./loginForm.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "universal-cookie";

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cookie = new Cookies();

	const userSign = (e) => {
		e.preventDefault();

		axios
			.post(`${process.env.REACT_APP_BASE_LOGIN_URL}/auth/login`, {
				username: "kminchelle",
				password: "0lelplR",
			})
			.then((response) => {
				dispatch(addUser(response.data));
				cookie.set("token", response.data.token, {
					path: "/",
					maxAge: 60 * 60,
				});

				navigate("/list-books");
			})
			.catch((err) => {
				toast.error(err.response.data.message);
			});
	};

	return (
		<form onSubmit={userSign}>
			<Toaster />
			<Logo className="logo" />
			<p className="welcome-text">Welcome Back!</p>
			<span className="sign-text">
				Sign in to continue to yourDigital Library
			</span>
			<div className="input-wrapper email">
				<label htmlFor="username" className="username">
					Email
				</label>
				<input type="text" name="username" id="username" />
			</div>
			<div className="input-wrapper password">
				<label htmlFor="password" className="password">
					Password
				</label>
				<input type="password" name="password" id="password" />
			</div>
			<div className="remember-wrapper d-flex justify-content-between align-items-center">
				<div className="d-flex gap-2 ">
					<input type="checkbox" className="remember" id="remember" />
					<label htmlFor="remember">Remember me</label>
				</div>

				<span className="forgot">Forgot password?</span>
			</div>
			<button type="submit" className="login">
				Login
			</button>
			<div className="footer-form ">
				<p className="new-user">
					New User? <span className="regis">Register Here</span>
				</p>
				<span className="guest">Use as Guest?</span>
			</div>
		</form>
	);
};

export default LoginForm;
