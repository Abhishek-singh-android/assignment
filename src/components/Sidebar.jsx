import React, { useState } from "react";
import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
  PresentationChartBarIcon,
  LogoutIcon,
  TableIcon,
  BriefcaseIcon,
  UserIcon,
  CashIcon,
  TrendingUpIcon,
  SupportIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/solid";

import { Flex, Text } from "@tremor/react";

const Sidebar = () => {

  const [focus,setFocus] = useState(false);

  return (
    <div className="bg-slate-800 flex-none w-14 sm:w-40 h-200">

    <div className="fixed left-[-7px] sm:left-1">
    <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
    <PresentationChartBarIcon width={40} className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" />
    <h1 className="text-gray-200 mb-4 text-base font-bold">Logo</h1>
    </div>
    </div>


      <div className="fixed left-[-7px] sm:left-1 top-[100px]">
    
        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <TableIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <h1 className="text-gray-200 mb-4">Dashboard</h1>
        </div>


        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <BriefcaseIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-4">Product</h1>
        </div>


        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <UserIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <h1 className="text-gray-200 mb-4">Customers</h1>
        </div>


        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <CashIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-4">Income</h1>
        </div>

        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <TrendingUpIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-4">Promote</h1>
        </div>

        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <QuestionMarkCircleIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-4">Help</h1>
        </div>

      </div>


      <div className="fixed bottom-4 left-[-7px] sm:left-1">

      <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a>
        <h1 className="text-gray-200 mb-4">Top</h1>
        </div>

        <div className="items-center justify-start flex m-4 gap-2 cursor-pointer">
        <LogoutIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
         <h1 className="text-gray-200 mb-4">SignOut</h1>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;


