import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, getUsername } from "../../utils/functions";
import "./header.css";

const Header = () => {
	const token = getToken();
	const username = getUsername();
	const navigate = useNavigate();
	const logoutHandler = () => {
		Cookies.remove("skygoals-job-task-token");
		Cookies.remove("skygoals-job-task-username");
		navigate("/login");
	};
	return (
		<header>
			<ul className="nav-items">
				{token ? (
					<>
						<strong style={{ marginRight: 10, marginLeft: 10 }}>
							{username}
						</strong>
						<button onClick={logoutHandler}>Logout</button>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="register">Register</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
};

export default Header;
