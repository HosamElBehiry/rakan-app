import { NotificationCard } from "@/components/cards/notification-card";
import { NotificationIcon } from "@/components/icons/notification-icon";

const NotificationsPage = () => {
  return (
    <section className="flex-1 bg-light-dark-1 py-13 px-9.5 rounded-3xl flex flex-col gap-14">
      <div className="flex items-center gap-2">
        <NotificationIcon className="size-4" />
        <h3 className="text-white font-bold">Notifications and Alerts</h3>
      </div>
      {[1, 2, 3, 4, 5].map((info) => (
        <NotificationCard key={info} />
      ))}
    </section>
  );
};

export default NotificationsPage;
