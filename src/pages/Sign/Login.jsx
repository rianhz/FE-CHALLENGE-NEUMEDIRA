import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
	return (
		<Container
			fluid
			className="d-flex justify-content-center align-items-center vh-100 w-100"
		>
			<LoginForm />
		</Container>
	);
};

export default Login;
