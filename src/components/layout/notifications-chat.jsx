import { NotificationIcon } from "../icons/notification-icon";
import { ChatIcon } from "../icons/chat-icon";
import { Link } from "@/i18n/navigation";

export const NotificationsChat = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="#"
        className="size-10 bg-light-dark-1 rounded-full flex items-center justify-center"
      >
        <NotificationIcon />
      </Link>
      <Link
        href="#"
        className="size-10 bg-light-dark-1 rounded-full flex items-center justify-center"
      >
        <ChatIcon />
      </Link>
    </div>
  );
};
