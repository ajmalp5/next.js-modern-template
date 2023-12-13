'use client';
import FormControl from 'insta/components/form-control/form-control';
import Input from 'insta/components/input/input';
import { signIn } from 'next-auth/react';
import { ChangeEvent, FormEvent, useState } from 'react';

type LoginInput = {
	username: string;
	password: string;
};

type PageProps = {
	searchParams: { error?: string };
};

export default function LoginPage({ searchParams }: PageProps) {
	const [inputs, setInputs] = useState<LoginInput>({
		username: '',
		password: '',
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		await signIn('credentials', {
			username: inputs.username,
			password: inputs.password,
			callbackUrl: '/',
		});
	};
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<FormControl className="mt-2">
							<Input
								id="username"
								name="username"
								label="Username"
								type="text"
								autoComplete="off"
								required
								value={inputs.username || ''}
								onChange={handleChange}
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</FormControl>

						<FormControl className="mt-2">
							<Input
								id="password"
								name="password"
								label="Password"
								type="password"
								autoComplete="off"
								required
								value={inputs.password || ''}
								onChange={handleChange}
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</FormControl>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
						</div>
						{searchParams.error && (
							<p className="text-red-600 text-center capitalize">
								Login failed.
							</p>
						)}
					</form>
				</div>
			</div>
		</>
	);
}
