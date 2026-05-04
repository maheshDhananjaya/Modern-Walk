import Link from "next/link";
import React from "react";

const MainLogo = () => {
  return (
    <div>
      <Link
        href="/"
        className="text-3xl leading-none font-bold text-primary cursor-pointer"
      >
        MW.
      </Link>
    </div>
  );
};

export default MainLogo;
