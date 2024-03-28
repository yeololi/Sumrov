import LogoutButton from "../_components/logoutButton";

const Mypage = () => {
  return (
    <>
      <div className="flex-col justify-center items-start gap-[13px] flex w-full">
        <div className="justify-start items-center gap-0.5 inline-flex w-full">
          <div className="text-[13px] font-medium font-pre">
            Lorem 님의 주문 현황
          </div>
          <div className="text-neutral-400 text-[11px] font-normal font-pre">
            (최근 3개월)
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-3.5 flex w-full">
          <div className="self-stretch h-[0px] border border-gray-200"></div>
          <div className="self-stretch justify-around items-center inline-flex">
            <div className="flex-col justify-center items-center gap-3.5 inline-flex">
              <div className="text-neutral-400 text-[11px] font-normal font-pre">
                입금전
              </div>
              <div className="text-[15px] font-normal font-pre">0</div>
            </div>
            <div className="flex-col justify-center items-center gap-3.5 inline-flex">
              <div className="text-neutral-400 text-[11px] font-normal font-pre">
                배송준비중
              </div>
              <div className="text-[15px] font-normal font-pre">0</div>
            </div>
            <div className="flex-col justify-center items-center gap-3.5 inline-flex">
              <div className="text-neutral-400 text-[11px] font-normal font-pre">
                배송중
              </div>
              <div className="text-[15px] font-normal font-pre">0</div>
            </div>
            <div className="flex-col justify-center items-center gap-3.5 inline-flex">
              <div className="text-neutral-400 text-[11px] font-normal font-pre">
                배송완료
              </div>
              <div className="text-[15px] font-normal font-pre">0</div>
            </div>
          </div>
          <div className="self-stretch h-[0px] border border-gray-200"></div>
        </div>
        <div className="text-[10px] font-normal font-pre">교환/반품 : 0</div>
      </div>
      <div className="self-stretch flex-col justify-center items-start gap-8 flex">
        <div className="flex-col justify-center items-start gap-[13px] flex">
          <div className="text-[13px] font-medium font-pre">주문내역 조회</div>
          <div className="text-[13px] font-medium font-pre">회원정보</div>
          <div className="text-[13px] font-medium font-pre">나의 리뷰</div>
          <div className="text-[13px] font-medium font-pre">장바구니</div>
        </div>
        <LogoutButton />
      </div>
    </>
  );
};

export default Mypage;
