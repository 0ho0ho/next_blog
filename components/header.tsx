import Link from "next/link";
import React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="p-5 text-3xl text-center">
      <Link href="/">
        <a>HO</a>
      </Link>
    </div>
  );
};

export default Header;
