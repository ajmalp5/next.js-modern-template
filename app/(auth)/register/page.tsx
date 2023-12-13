import Button from 'insta/components/button/button';
import FormControl from 'insta/components/form-control/form-control';
import Input from 'insta/components/input/input';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Register Page',
};

export default function RegisterPage() {
	return (
		<>
			<div className="flex items-center justify-end p-8">
				<Link href="/">Home</Link>
			</div>
			<div className="max-w-lg mx-auto">
				<h2 className="text-center text-xl font-medium py-4">Register</h2>
				<form action="/api/login" method="POST">
					<FormControl>
						<Input
							minLength={3}
							name="email"
							id="email"
							type="text"
							placeholder="Email"
							required
						/>
					</FormControl>
					<FormControl>
						<Input
							minLength={5}
							name="password"
							id="password"
							type="password"
							placeholder="Password"
							required
						/>
					</FormControl>
					<div className="flex justify-end py-5">
						<Button type="submit">Register</Button>
					</div>
				</form>
			</div>
		</>
	);
}
