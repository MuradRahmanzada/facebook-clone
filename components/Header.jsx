import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession()
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          height={35}
          width={35}
          layout="fixed"
          className="cursor-pointer"
        />
      </div>

      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden md:inline-flex ml-2 items-center  bg-transparent outline-none placeholder-gray-500 flex-shrink"
        />
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center
       sm:space-x-2 justify-end">
        <Image
        onClick={signOut}
        src={session.user.image}
        className="rounded-full cursor-pointer"
        width={40}
        height={40}
        layout="fixed"   
        />
        <p className="hidden md:block whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
};

export default Header;
