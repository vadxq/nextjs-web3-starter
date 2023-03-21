'use client';

const Navbar = () => {
  return (
    <>
      <div className="h-16">
        <div
          style={{ backdropFilter: 'saturate(180%) blur(5px)' }}
          className={`z-[100] flex h-16 w-screen items-center justify-between bg-white bg-[hsla(0,0%,100%,.8)] transition-opacity `}
        >
          navbar
        </div>
      </div>
    </>
  );
};

export default Navbar;
