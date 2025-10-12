import React from "react";
import { Search, Handbag, User } from "lucide-react";
import Link from "next/link";

import MainLogo from "../MainLogo";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { HeaderNavLinks } from "./contant";

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b py-8 px-30">
      <div>
        <MainLogo />
      </div>
      <div className="flex gap-8">
        {HeaderNavLinks.map((link, index) => (
          <nav key={index}>
            <Typography variant="base">{link.name}</Typography>
          </nav>
        ))}
      </div>
      <div className="h-10  flex items-center px-3 py-2.5  border rounded-md">
        <Search className="mr-2 w-4 h-4" />
        <input type="text" placeholder="Search" className="outline-none" />
      </div>
      <div className="flex gap-6">
        <Link href={"/cart"}>
          <Handbag />
        </Link>
        <User />
      </div>
    </div>
  );
};

export default Header;
