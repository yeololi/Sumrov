"use client";
import axios from "axios";
import { FormEvent } from "react";

const LoginForm = ({ children }: { children: React.ReactNode }) => {
  const onClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios({
      url: "/backend/auth/mail-login",
      method: "POST",
      data: {
        id: "t23wedt",
        pw: "asdfasdf",
      },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form
        onSubmit={onClick}
        className="flex-col justify-center items-center gap-8 flex"
      >
        {children}
      </form>
    </>
  );
};

export default LoginForm;
