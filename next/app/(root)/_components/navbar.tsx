const Navbar = () => {
  return (
    <div className="w-full h-[150px] relative bg-black bg-opacity-5">
      <div className="w-[1240px] left-[100px] top-[54px] absolute justify-start items-center gap-[1091px] inline-flex">
        <div className="justify-start items-center gap-[15px] flex">
          <img className="w-5 h-5" src="/images/logo.png" />
          <div className="text-black text-lg font-semibold font-nav">
            SUMROV
          </div>
        </div>
        <div className="w-10 h-10 relative">
          <div className="w-10 h-10 left-0 top-0 absolute bg-black bg-opacity-10 rounded-[5px]" />
          <div className="w-[22px] h-[22px] left-[8px] top-[10px] absolute rounded-[5px]">
            <div className="w-[20.63px] h-[20.62px] left-[1.37px] top-0 absolute"></div>
          </div>
        </div>
      </div>
      <div className="left-[500px] top-[62px] absolute justify-center items-start gap-[75px] inline-flex">
        <div className="text-black text-xl font-bold font-nav">Shop</div>
        <div className="text-black text-xl font-bold font-nav">Service</div>
        <div>
          <span className="text-black text-xl font-bold font-nav">Cart (</span>
          <span className="text-black text-base font-normal font-num">0</span>
          <span className="text-black text-xl font-bold font-nav">)</span>
        </div>
        <div className="text-black text-xl font-bold font-nav">Log in</div>
      </div>
    </div>
  );
};

export default Navbar;
