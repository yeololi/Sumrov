import Link from "next/link";
import Header from "../../_components/header";
import LoginForm from "./_components/loginForm";
import Image from "next/image";

const Login = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center pt-[139px]">
                <LoginForm />
                <div className="w-[336px] h-[356px] flex-col justify-start items-center gap-[19px] inline-flex">
                    <div className="justify-between items-center flex w-full">
                        <Link
                            href={"/mobile/findEmail"}
                            className="text-black dark:text-white text-[11px] font-normal font-pre"
                        >
                            find ID
                        </Link>
                        <Link
                            href={"/mobile/findPw"}
                            className="text-black dark:text-white text-[11px] font-normal font-pre"
                        >
                            find Password
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
