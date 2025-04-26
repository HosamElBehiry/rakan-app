import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowIcon } from "../icons/arrow-icon";

export const UserActions = () => {
  return (
    <Link
      href="/general-information"
      className="size-11.5 rounded-full relative"
    >
      <Image
        loading="lazy"
        src="/dummy/user.jpg"
        className="size-full object-cover rounded-full"
        height={46}
        width={46}
        alt="User Img!"
      />
      <span className="bg-primary border-2 border-dark p-1 text-white size-4.5 rounded-full grid place-items-center absolute -bottom-2 start-1/2 -translate-x-1/2 z-20">
        <ArrowIcon />
      </span>
    </Link>
  );
};
