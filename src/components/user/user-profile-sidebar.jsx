"use client";

import { FinancialSettingsIcon } from "@/components/icons/financial-settings-icon";
import { PrivacySecurityIcon } from "@/components/icons/privacy-security-icon";
import { NotificationIcon } from "@/components/icons/notification-icon";
import { HelpSupportIcon } from "@/components/icons/help-support-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { GroupIcon } from "@/components/icons/group-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { Link, usePathname } from "@/i18n/navigation";

export const UserProfileSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-light-dark-1 h-fit w-80 p-6 rounded-3xl flex flex-col gap-8">
      <div className="flex items-center gap-1.5 text-primary">
        <SettingsIcon className="size-5" />
        <h5 className="text-xl font-bold">Settings</h5>
      </div>
      <div className="flex flex-col gap-6.5">
        <Link href="/general-information" className="flex items-center gap-1.5">
          <span
            className={`size-6 ${
              pathname === "/general-information"
                ? "bg-primary-1"
                : "bg-light-dark-2"
            } rounded-full grid place-items-center`}
          >
            <UserIcon className="size-3.5 text-white" />
          </span>
          <h4
            className={`${
              pathname === "/general-information"
                ? "font-bold text-primary"
                : "font-normal text-white"
            } text-sm hover:text-primary`}
          >
            General Information
          </h4>
        </Link>
        <Link href="/financial-settings" className="flex items-center gap-1.5">
          <span
            className={`size-6 ${
              pathname === "/financial-settings"
                ? "bg-primary-1"
                : "bg-light-dark-2"
            } rounded-full grid place-items-center`}
          >
            <FinancialSettingsIcon className="size-3.5 text-white" />
          </span>
          <h4
            className={`${
              pathname === "/financial-settings"
                ? "font-bold text-primary"
                : "font-normal text-white"
            } text-sm hover:text-primary`}
          >
            Financial and Settings
          </h4>
        </Link>
        <Link href="/privacy-security" className="flex items-center gap-1.5">
          <span
            className={`size-6 ${
              pathname === "/privacy-security"
                ? "bg-primary-1"
                : "bg-light-dark-2"
            } rounded-full grid place-items-center`}
          >
            <PrivacySecurityIcon className="size-3.5 text-white" />
          </span>
          <h4
            className={`${
              pathname === "/privacy-security"
                ? "font-bold text-primary"
                : "font-normal text-white"
            } text-sm hover:text-primary`}
          >
            Privacy and Security Settings
          </h4>
        </Link>
        <Link href="/notifications" className="flex items-center gap-1.5">
          <span
            className={`size-6 ${
              pathname === "/notifications" ? "bg-primary-1" : "bg-light-dark-2"
            } rounded-full grid place-items-center`}
          >
            <NotificationIcon className="size-3.5 text-white" />
          </span>
          <h4
            className={`${
              pathname === "/notifications"
                ? "font-bold text-primary"
                : "font-normal text-white"
            } text-sm hover:text-primary`}
          >
            Notification and Alerts
          </h4>
        </Link>
        <Link href="/branding" className="flex items-center gap-1.5">
          <span
            className={`size-6 ${
              pathname === "/branding" ? "bg-primary-1" : "bg-light-dark-2"
            } rounded-full grid place-items-center`}
          >
            <GroupIcon className="size-3.5 text-white" />
          </span>
          <h4
            className={`${
              pathname === "/branding"
                ? "font-bold text-primary"
                : "font-normal text-white"
            } text-sm hover:text-primary`}
          >
            Branding and Teams
          </h4>
        </Link>
        <Link href="/help-support" className="flex items-center gap-1.5">
          <span
            className={`size-6 ${
              pathname === "/help-support" ? "bg-primary-1" : "bg-light-dark-2"
            } rounded-full grid place-items-center`}
          >
            <HelpSupportIcon className="size-3.5 text-white" />
          </span>
          <h4
            className={`${
              pathname === "/help-support"
                ? "font-bold text-primary"
                : "font-normal text-white"
            } text-sm hover:text-primary`}
          >
            Help and Support
          </h4>
        </Link>
      </div>
    </aside>
  );
};
