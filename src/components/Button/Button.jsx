import React from "react";

const Button = ({ name }) => {
	return (
		<div className="button__box">
			<button type="submit">{name}</button>
		</div>
	);
};

export default Button;
