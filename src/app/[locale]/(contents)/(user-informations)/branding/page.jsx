"use client";

import { ActionIcon } from "@/components/icons/action-icon";
import { AddCircleIcon } from "@/components/icons/add-circle-icon";
import { ArrowIcon } from "@/components/icons/arrow-icon";
import { GroupIcon } from "@/components/icons/group-icon";
import { UserNewBrandForm } from "@/components/profile/user-new-brand-form";
import Image from "next/image";
import { useState } from "react";

const BrandingPage = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="flex-1 bg-light-dark-1 py-9 px-6.5 rounded-3xl flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GroupIcon className="text-white size-4" />
          <h4 className="font-bold text-white">Branding and Teams</h4>
        </div>
        <div className="flex items-center gap-2">
          {["My Brand", "My Marketers"].map((info, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`py-2 px-4 text-xs cursor-pointer hover:bg-primary ${
                active === i
                  ? "bg-primary font-bold"
                  : "bg-light-dark-2 border-light-dark-2 border"
              } text-white rounded-md`}
            >
              {info}
            </button>
          ))}
        </div>
      </div>
      {!active ? (
        <UserNewBrandForm />
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 text-primary">
            <GroupIcon className="size-4" />
            <h4 className="text-sm font-bold">My Marketers</h4>
          </div>
          <table>
            <thead>
              <tr className="text-sm">
                <th className="pb-3 text-primary">ID</th>
                <th className="pb-3 text-white">Marketer Profile</th>
                <th className="pb-3 text-white">Total Sales</th>
                <th className="pb-3 text-white">Commission</th>
                <th className="pb-3 text-white">Net Profit(SAR)</th>
                <th className="pb-3 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((info) => (
                <tr className="text-sm" key={info}>
                  <td className="py-3 text-center text-primary">{info}</td>
                  <td className="py-3 text-center text-white">
                    <span className="flex items-center justify-center gap-2">
                      <Image
                        height={20}
                        width={20}
                        alt="User"
                        className="size-5 rounded-full object-cover"
                        src="/dummy/user.jpg"
                      />
                      <span className="text-center text-white">
                        Hisham Mousa
                      </span>
                    </span>
                  </td>
                  <td className="py-3 text-center text-white">2</td>
                  <td className="py-3 text-center text-white">10%</td>
                  <td className="py-3 text-center text-white">152 SAR</td>
                  <td className="py-3 text-center text-white">
                    <button className="cursor-pointer">
                      <ActionIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between">
            <div className="w-60 border border-primary flex items-center">
              <button className="size-12 cursor-pointer border-e border-e-primary text-xs text-white flex items-center gap-3 justify-center">
                1 <ArrowIcon className="size-2 rotate-90" />
              </button>
              <div className="flex-1 text-white flex items-center justify-center text-xs">
                {" "}
                1 of 5 pages
              </div>
              <button className="size-12 cursor-pointer border-x border-x-primary text-white flex items-center gap-3 justify-center">
                <ArrowIcon className="size-2 -rotate-90" />
              </button>
              <button className="size-12 cursor-pointer text-white flex items-center gap-3 justify-center">
                <ArrowIcon className="size-2 rotate-90" />
              </button>
            </div>
            <button className="flex items-center gap-2 text-primary">
              <AddCircleIcon />
              <span className="font-bold">Add New Marketer</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandingPage;
