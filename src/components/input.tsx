import React from "react";

type InputProps = {
	label?: string;
	placeholder: string;
	name: string;
	labelClasses?: string;
	inputClasses?: string;
};

export const Input: React.FC<InputProps> = ({
	label,
	name,
	placeholder,
	inputClasses,
	labelClasses,
}) => {
	return (
		<>
			{label ? (
				<label
					htmlFor={name}
					className={"text-lg font-bold text-green-800 " + labelClasses}
				>
					{label}
				</label>
			) : (
				""
			)}
			<input
				type="text"
				name={name}
				id={name}
				className={`${
					label ? "mt-4" : ""
				} rounded-md shadow-input h-[52px] p-3 text-green-800 ${inputClasses}`}
				placeholder={placeholder}
			/>
		</>
	);
};
