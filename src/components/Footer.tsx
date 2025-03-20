import Image from "next/image";
import React from "react";
import { assets } from "../../public/Assets/assets";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex justify-around items-center flex-col gap-2 sm:gap-0 sm:flex-row py-5">
        <Image src={assets.logo_light} alt="Logo" width={120} />
        <p className="text-sm text-white">
          All right reserved. Copyright &copy;blogger
        </p>
        <div className="flex gap-2">
          <Image src={assets.facebook_icon} alt="facebook" width={40} />
          <Image src={assets.twitter_icon} alt="twitter" width={40} />
          <Image src={assets.googleplus_icon} alt="twitter" width={40} />
        </div>
      </div>
    </footer>
  );
}
