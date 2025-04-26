import { FinancialSettingsIcon } from "@/components/icons/financial-settings-icon";
import { PrivacySecurityIcon } from "@/components/icons/privacy-security-icon";
import { NotificationIcon } from "@/components/icons/notification-icon";
import { HelpSupportIcon } from "@/components/icons/help-support-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { GroupIcon } from "@/components/icons/group-icon";
import { UserIcon } from "@/components/icons/user-icon";

export const UserProfileSidebar = () => {
  return (
    <aside className="bg-light-dark-1 h-fit w-80 p-6 rounded-3xl flex flex-col gap-8">
      <div className="flex items-center gap-1.5 text-primary">
        <SettingsIcon className="size-5" />
        <h5 className="text-xl font-bold">Settings</h5>
      </div>
      <div className="flex flex-col gap-6.5">
        <div className="flex items-center gap-1.5">
          <span className="size-6 bg-primary-1 rounded-full grid place-items-center">
            <UserIcon className="size-3.5" />
          </span>
          <h4 className="font-bold text-primary text-sm">
            General Information
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-6 bg-light-dark-2 rounded-full grid place-items-center">
            <FinancialSettingsIcon className="size-3.5 text-white" />
          </span>
          <h4 className="text-white text-sm">Financial and Settings</h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-6 bg-light-dark-2 rounded-full grid place-items-center">
            <PrivacySecurityIcon className="size-3.5 text-white" />
          </span>
          <h4 className="text-white text-sm">Privacy and Security Settings</h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-6 bg-light-dark-2 rounded-full grid place-items-center">
            <NotificationIcon className="size-3.5 text-white" />
          </span>
          <h4 className="text-white text-sm">Notification and Alerts</h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-6 bg-light-dark-2 rounded-full grid place-items-center">
            <GroupIcon className="size-3.5 text-white" />
          </span>
          <h4 className="text-white text-sm">Branding and Teams</h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-6 bg-light-dark-2 rounded-full grid place-items-center">
            <HelpSupportIcon className="size-3.5 text-white" />
          </span>
          <h4 className="text-white text-sm">Help and Support</h4>
        </div>
      </div>
    </aside>
  );
};
