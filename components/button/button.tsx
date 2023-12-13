import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className={twMerge('h-8 flex items-center justify-center px-4 bg-blue-600 text-white rounded-md', className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
