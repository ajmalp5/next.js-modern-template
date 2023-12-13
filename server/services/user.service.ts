import { User } from "insta/types/user";

export const userService = {
	authenticate,
};

function authenticate(username: string, password: string) {
	console.log(username, password, 'password password');
	if (username !== 'admin' || password !== 'admin') {
		return null;
	}
	const user = {
		id: '9002',
		name: 'Web Admin',
		email: 'admin@example.com',
		access_token: 'accesssdcasdcsadcasdcasd',
		refresh_token: 'refreshaxsadcasdcasdc',
		expires_in: 300,
	};
	return user;
}
