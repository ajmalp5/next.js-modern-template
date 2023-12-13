import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormControlProps {
	children: ReactNode;
	label?: string;
	description?: string;
	className?: string;
}

const FormControl: React.FC<FormControlProps> = ({
	children,
	label,
	description,
	className,
}) => {
	return (
		<div className={twMerge('mb-4', className)}>
			{label && (
				<label className="block text-gray-700 text-sm font-bold mb-2">
					{label}
				</label>
			)}
			{children}
			{description && <small className="text-gray-600">{description}</small>}
		</div>
	);
};

export default FormControl;
