import React from "react";

const Input = ({ type, placeholder, onChange, name }) => {
	return (
		<div className="input__box">
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default Input;
