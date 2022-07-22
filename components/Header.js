import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="m-5  flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon}></HeaderItem>
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon}></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}></HeaderItem>
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}></HeaderItem>
        <HeaderItem title="SEARCH" Icon={SearchIcon}></HeaderItem>
        <HeaderItem title="SEARCH" Icon={UserIcon}></HeaderItem>
      </div>
      <Image
        className="object-contain"
        width={200}
        height={100}
        alt="Hulu Logo"
        src="/images/hulu-logo.webp"
      />
    </div>
  );
}

export default Header;
