import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      accessToken: string;
      _id: string;
      address: string;
      addrDetails: string;
      zonecode: string;
      tel: string;
    };
  }
}
