'use client';

import Link from 'next/link';
import React, { useCallback, useState } from 'react';

import SideBar from './SideBar';

const Header = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  const handleClickMenu = () => {
    setIsShowSideBar(!isShowSideBar);
  };

  const onClose = useCallback(() => {
    setIsShowSideBar(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-10 w-full py-3 m-auto text-3xl font-extrabold text-center bg-white bg-opacity-30 backdrop-blur-sm">
        <i className="absolute text-xl -translate-y-1/2 left-5 top-1/2 fa-solid fa-bars" onClick={handleClickMenu} />
        <Link href="/">oungo</Link>
      </header>

      {isShowSideBar && <SideBar onClose={onClose} />}
    </>
  );
};

export default Header;
