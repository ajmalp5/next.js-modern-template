import { NextAuthOptions, getServerSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { userService } from './services/user.service';
export const authOptions: NextAuthOptions = {
	secret: '5FwbEzbP/je2KKY/VcmwcicWYQkg2YVgbLxgV4nl2PU=',
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, account, profile }) {
			console.log(account, 'account');
			if (account && account.type === 'credentials') {
				token.userId = account.providerAccountId;
			}
			return token;
		},
		async session({ session, token, user }) {
			console.log(session, 'HELLO');
			session.user.id = token.userId;
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'username' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const { username, password } = credentials as {
					username: string;
					password: string;
				};
				const user = userService.authenticate(username, password);
				console.log('User authenticated:', user);
				return user;
			},
		}),
	],
};
// export default NextAuth(authOptions);

export const getServerAuthSession = () => getServerSession(authOptions);
