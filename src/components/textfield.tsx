import React from "react";

type TextfieldProps = {
	placeholder: string;
	name: string;
	textfieldClasses?: string;
	rows: number;
};

export const Textfield: React.FC<TextfieldProps> = ({
	placeholder,
	name,
	textfieldClasses,
	rows,
}) => {
	return (
		<textarea
			name={name}
			id={name}
			rows={rows}
			className={`w-full shadow-input p-3 rounded-md ${textfieldClasses}`}
			placeholder={placeholder}
		></textarea>
	);
};
