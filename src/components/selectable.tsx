import React from "react";

type SelectableProps = {
	label: string;
	name: string;
	labelClasses: string;
	options: string[];
	placeholder: string;
	selectedOption: number;
	handleSelectOption: (i: number) => void;
};

export const Selectable: React.FC<SelectableProps> = ({
	label,
	name,
	labelClasses,
	options,
	placeholder,
	selectedOption,
	handleSelectOption,
}) => {
	const [isSelectMenuOpen, setIsSelectMenuOpen] = React.useState(false);

	const toggleSelectMenuOpen = () => {
		setIsSelectMenuOpen(!isSelectMenuOpen);
	};

	return (
		<>
			{label && (
				<label
					htmlFor={name}
					className={"text-lg font-bold text-green-800 " + labelClasses}
				>
					{label}
				</label>
			)}
			<div
				className={`${
					label && "mt-4"
				} rounded-md shadow-input h-[52px] p-3 text-green-800 relative cursor-pointer`}
				onClick={toggleSelectMenuOpen}
			>
				<p className={selectedOption >= 0 ? "text-green-800" : "text-gray-400"}>
					{selectedOption >= 0 ? options[selectedOption] : placeholder}
				</p>
				{isSelectMenuOpen && (
					<div className="rounded-md shadow-input text-green-800 bg-white z-[99] absolute top-14 w-full left-0 p-2">
						{options.map((o, i) => (
							<p
								onClick={() => {
									toggleSelectMenuOpen();
									handleSelectOption(i);
								}}
								className="rounded-md cursor-pointer ease-in-out duration-300 transition-all px-3 py-4 hover:bg-green-400/50 text-green-800"
							>
								{o}
							</p>
						))}
					</div>
				)}
			</div>
		</>
	);
};
