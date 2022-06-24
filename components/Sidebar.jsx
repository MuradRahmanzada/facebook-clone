import React from "react";
import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const { data: session, loading } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} className="text-xl"/>
      <SidebarRow Icon={UsersIcon} title="Friends" className="text-xl"/>
      <SidebarRow Icon={UserGroupIcon} title="Groups" className="text-xl"/>
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" className="text-xl"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" className="text-xl"/>
      <SidebarRow Icon={CalendarIcon} title="Events" className="text-xl"/>
      <SidebarRow Icon={ClockIcon} title="Memories" className="text-xl"/>
      <SidebarRow Icon={ChevronDownIcon} title="See More" className="text-xl"/>
    </div>
  );
};

export default Sidebar;
