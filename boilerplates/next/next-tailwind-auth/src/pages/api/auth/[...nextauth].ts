import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Users from '../../../models/User';
import connectMongo from '../../../utils/database';
import { compare } from 'bcryptjs';
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, JWT_SECRET } from '../../../configs/configs';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET
    }),
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials: any, req: any) {
        connectMongo().catch((error: any) => {
          error: 'Connection Failed...!';
        });

        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error('No user Found with Email Please Sign Up...!');
        }

        const checkPassword = await compare(credentials.password, result.password);

        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
      credentials: {}
    })
  ],
  secret: JWT_SECRET,
  session: {
    strategy: 'jwt'
  }
};

export default NextAuth(authOptions);
