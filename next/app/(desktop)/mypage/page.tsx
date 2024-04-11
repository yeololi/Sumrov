import Footer from "../_components/footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOption";
import Header from "../_components/header";
import MyPageset from "./_components/myPage";
import { redirect } from "next/navigation";
const session = await getServerSession(authOptions);
function mypage() {
    console.log(session);

    !session && redirect("/login");
    return (
        <>
            <Header />
            <div className="flex justify-center pt-[200px] pb-[91px] bg-neutral-50 dark:bg-inherit">
                <div className="w-[1040px] flex-col justify-start items-center gap-[70px] inline-flex">
                    <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
                        MY PAGE
                    </div>
                    <MyPageset session = {session} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default mypage;
