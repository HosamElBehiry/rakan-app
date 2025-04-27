"use client";

import { useState } from "react";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { ChangeUserEmail } from "@/components/profile/change-user-email";
import { ChangeUserPassword } from "@/components/profile/change-user-password";

const PrivacySecurityPage = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="flex-1 bg-light-dark-1 py-9 px-6.5 rounded-3xl flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SettingsIcon className="text-white size-4" />
          <h4 className="font-bold text-white">Privacy & Security Settings </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActive(0)}
            className={`py-2 px-4 text-xs cursor-pointer hover:bg-primary ${
              active === 0
                ? "bg-primary"
                : "bg-light-dark-2 border-light-dark-2 border"
            } text-white rounded-md`}
          >
            Password
          </button>
          <button
            onClick={() => setActive(1)}
            className={`py-2 px-4 text-xs cursor-pointer hover:bg-primary ${
              active === 1
                ? "bg-primary"
                : "bg-light-dark-2 border-light-dark-2 border"
            } text-white rounded-md`}
          >
            Email
          </button>
          <button
            onClick={() => setActive(2)}
            className={`py-2 px-4 text-xs cursor-pointer hover:bg-primary ${
              active === 2
                ? "bg-primary"
                : "bg-light-dark-2 border-light-dark-2 border"
            } text-white rounded-md`}
          >
            Privacy Policy
          </button>
        </div>
      </div>
      {active === 0 ? <ChangeUserPassword /> : <ChangeUserEmail />}
    </section>
  );
};

export default PrivacySecurityPage;
