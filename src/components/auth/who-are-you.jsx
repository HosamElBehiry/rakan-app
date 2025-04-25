"use client";

import { WhoAreYouData } from "@/constants/who-are-you";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import Image from "next/image";

export const WhoAreYou = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="flex flex-col gap-2.5">
        <p className="text-sm text-white">You are ..</p>
        <div className="flex items-center gap-3">
          {WhoAreYouData.map((info, index) => (
            <div
              key={info.name}
              onClick={() => setActive(index)}
              className={`flex flex-col items-center justify-center gap-2.5 min-w-[130px] ${
                active === index ? "border-primary" : "border-transparent"
              } outline-primary hover:border-primary rounded-[20px] bg-dark py-7 px-4.5 cursor-pointer border-4`}
            >
              <Image
                src={info.img}
                className="w-[65px] h-[75px] object-contain"
                height={73}
                width={65}
                alt=""
              />
              <p className="text-white font-normal text-sm text-center">
                {info?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link
        href={`/register?type=${
          !active ? "free-lancer" : active === 1 ? "client" : "marketer"
        }`}
        className="bg-primary text-white py-2.5 px-8 rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
      >
        Next
      </Link>
    </>
  );
};
