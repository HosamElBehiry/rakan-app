"use client";

import { useState } from "react";
import { UserFaqs } from "@/components/profile/user-faqs";
import { HelpSupportIcon } from "@/components/icons/help-support-icon";
import { UserContactUs } from "@/components/profile/user-contact-us";

const HelpSupportPage = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="flex-1 bg-light-dark-2 py-9 px-6.5 rounded-3xl flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HelpSupportIcon className="text-white size-4" />
          <h4 className="font-bold text-white">Help & Support</h4>
        </div>
        <div className="flex items-center gap-2">
          {["FAQs", "Contact Us"].map((info, i) => (
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
      {!active ? <UserFaqs /> : <UserContactUs />}
    </section>
  );
};

export default HelpSupportPage;
