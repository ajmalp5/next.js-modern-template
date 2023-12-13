import React, { ReactNode } from 'react';

interface FormControlProps {
	children: ReactNode;
	label?: string;
	description?: string;
}

const FormControl: React.FC<FormControlProps> = ({
	children,
	label,
	description,
}) => {
	return (
		<div className="mb-4">
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
