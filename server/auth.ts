import { NextAuthOptions, getServerSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { userService } from './services/user.service';
export const authOptions: NextAuthOptions = {
	secret: '5FwbEzbP/je2KKY/VcmwcicWYQkg2YVgbLxgV4nl2PU=',
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user, account, profile }) {
			let _token = token;
			if (user && account && account.type === 'credentials') {
				_token.userId = account.providerAccountId;
				_token = { ..._token, ...user };
			}
			return Promise.resolve(_token);
		},
		async session({ session, token, user }) {
			session.user = { ...session.user, ...token };
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
				return user;
			},
		}),
	],
};

export const getServerAuthSession = () => getServerSession(authOptions);
