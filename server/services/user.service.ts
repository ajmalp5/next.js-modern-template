export const userService = {
	authenticate,
};

function authenticate(username: string, password: string) {
	console.log(username, password, 'password password');
	if (username !== 'admin' || password !== 'admin') {
		return null;
	}

	const user = {
		id: '9001',
		name: 'Web Admin',
		email: 'admin@example.com',
	};

	return user;
}
