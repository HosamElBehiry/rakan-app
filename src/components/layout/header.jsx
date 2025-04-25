import { LocaleSwitcher } from "../buttons/locale-swither";
import { NotificationsChat } from "./notifications-chat";
import { DarkLightMode } from "./dark-light-mode";
import { UserActions } from "./user-actions";
import { Navbar } from "./navbar";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="container mx-auto pt-3 relative z-60">
      <div className="p-4.5 bg-[url('/dummy/top-bg-transparent.png')] bg-cover rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <Navbar />
        </div>
        <div className="flex items-center gap-6">
          <LocaleSwitcher />
          <DarkLightMode />
          <NotificationsChat />
          <UserActions />
        </div>
      </div>
    </header>
  );
};
