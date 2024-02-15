const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <main className="w-[375px]">{children}</main>
    </div>
  );
};

export default MobileLayout;
