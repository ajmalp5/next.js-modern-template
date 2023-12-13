import NextAuth, { DefaultSession, DefaultJWT } from 'next-auth';
import { JWT } from 'next-auth/jwt';


declare module 'next-auth' {
	interface Session extends DefaultSession {
    error?: 'RefreshAccessTokenError';
		user: {
      id: string;
			access_token: string;
      refresh_token: string;
		} & DefaultSession['user'];
	}

	interface User {
		access_token: string;
    refresh_token: string;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		userId: string;
    access_token: string;
    refresh_token: string;
	}
}