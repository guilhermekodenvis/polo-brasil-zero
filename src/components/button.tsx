import React from "react";

type ButtonProps = {
	startIcon?: boolean;
	variant: "primary" | "outline-primary";
	text: string;
	buttonClasses?: string;
};

export const Button: React.FC<ButtonProps> = ({
	text,
	variant,
	buttonClasses,
}) => {
	return (
		<button type="button" className={`bt bt-${variant} ${buttonClasses}`}>
			{text}
		</button>
	);
};
