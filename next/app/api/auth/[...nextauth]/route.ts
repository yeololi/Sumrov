import NextAuth from "next-auth";
import clientPromise from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import { AxiosError } from "axios";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );
          const user = await res.json();

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (err) {
          console.error(err);
        }
      },
    }),

    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      try {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/snsLogin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
            }),
          }
        );

        const users = await res.json();

        console.log(users, account, profile, email, credentials);

        if (users.result && users.result.name) {
          return true;
        } else {
          return `/signup?email=${user.email}`;
        }
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
          return `/login?errorcode=${error.message}`;
        } else {
          return false;
        }
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs

      console.log(url, baseUrl);
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    //4. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      return { ...token, ...user };
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/mobile/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
