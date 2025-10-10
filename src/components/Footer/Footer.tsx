import React from "react";
import MainLogo from "../MainLogo";
import { Typography } from "../ui/typography";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FooterLinks, PaymentsMethods } from "./constant";

const Footer = () => {
  return (
    <div className="flex flex-col py-16 px-30 bg-muted">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 max-w-3xs">
          <MainLogo />
          <Typography variant="small" className="text-muted-foreground">
            Modern Walk brings you timeless fashion with a modern edge. From
            everyday essentials to statement pieces.
          </Typography>
          <div className="flex gap-4 mt-4">
            <div className="bg-white p-2 rounded-md">
              <Facebook />
            </div>
            <div className="bg-white p-2 rounded-md">
              <Twitter />
            </div>
            <div className="bg-white p-2 rounded-md">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="flex flex-1" />
        <div className="grid grid-cols-3 gap-8">
          {FooterLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Typography variant="h6" className="mb-8">
                {section.name}
              </Typography>
              {section.value.map((item, index) => (
                <Typography
                  key={index}
                  variant="small"
                  className="text-muted-foreground"
                >
                  {item.name}
                </Typography>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between mt-16 border-t pt-6">
        <Typography variant="small" className="text-muted-foreground">
          © 2024 Modern Walk. All rights reserved.
        </Typography>
        <div className="flex flex-row gap-4">
          {PaymentsMethods.map((item, index) => (
            <div className="bg-white px-2" key={index}>
              <Typography className="" key={index}>
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
