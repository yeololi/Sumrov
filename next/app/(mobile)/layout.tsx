const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center">
      <main className="w-full relative">{children}</main>
    </div>
  );
};

export default MobileLayout;
