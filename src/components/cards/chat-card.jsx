import Image from "next/image";
import { TimeIcon } from "../icons/time-icon";
import { WeChatIcon } from "../icons/we-chat-icon";

export const ChatCard = ({ fromUser = false }) => {
  return (
    <div
      className={`relative py-4.5 pe-4.5 ps-8 ${
        fromUser ? "bg-primary-2" : "bg-light-dark-1"
      } flex flex-col gap-2.5 rounded-3xl`}
    >
      <p className="text-sm text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laboriosam
        eligendi tempora numquam aspernatur quam eius, perferendis quod hic
        minus? Minus ab beatae dolores cumque totam, laborum iusto temporibus
        deleniti voluptate aspernatur. Minima impedit laborum iure cum non neque
        eligendi maxime incidunt optio assumenda ullam mollitia voluptatem,
        voluptas officia tenetur illo dolorum debitis earum expedita quis
        repellat ratione! Vel, fugit.
      </p>
      <div className="flex items-center gap-1 text-white/70">
        <TimeIcon className="size-2.5" />
        <span className="text-[10px]">Since 10 min</span>
      </div>
      <span
        className={`absolute -bottom-3 ${
          !fromUser ? "-start-5" : "-end-5"
        } size-12 bg-light-dark-2 rounded-full flex items-center justify-center`}
      >
        <span className="size-9 bg-primary rounded-full grid place-items-center">
          {fromUser ? (
            <Image
              loading="lazy"
              src="/dummy/user.jpg"
              className="rounded-full size-full object-cover"
              height={36}
              width={36}
              alt="User Img!"
            />
          ) : (
            <WeChatIcon className="size-4.5" />
          )}
        </span>
      </span>
    </div>
  );
};
