import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
import Input from "../../components/Input/Input";

const Register = () => {
	const [inputs, setInputs] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const changeHandler = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		if (inputs.password.length < 3) {
			alert("Password should be at least six characters");
			return;
		}
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const { data } = await axios.post(
				"https://skygoals-job-task-server.vercel.app/api/user/",
				inputs,
				config
			);
			console.log(data);
			if (data) {
				Cookies.set("skygoals-job-task-token", data?.token, {
					expires: 7,
					path: "/",
				});
				Cookies.set("skygoals-job-task-username", data?.name, {
					expires: 7,
					path: "/",
				});
				setErrorMessage("");
				navigate("/");
			}
		} catch (error) {
			const err = error?.response?.data?.message || error?.message;
			setErrorMessage(err);
		}
	};
	return (
		<div className="form__container">
			{errorMessage && <Error message={errorMessage} />}
			<form className="form" onSubmit={submitHandler}>
				<h1>Register</h1>
				<Input
					name="username"
					type="text"
					placeholder="username...."
					onChange={changeHandler}
				/>
				<Input
					name="email"
					type="email"
					placeholder="email...."
					onChange={changeHandler}
				/>
				<Input
					name="password"
					type="password"
					placeholder="password...."
					onChange={changeHandler}
				/>
				<Button name="Register" />
				<p>
					Already have an account? <Link to="/login">Login</Link>{" "}
				</p>
			</form>
		</div>
	);
};

export default Register;
