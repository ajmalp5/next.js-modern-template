import React, { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
	return (
		<>
			{label && <label htmlFor={props.id}>{label}</label>}
			<input
				className={twMerge('px-6 h-10 w-full border-1 border-gray-50 rounded-md', className)}
				{...props}
			/>
		</>
	);
};

export default Input;
