import Image from "next/image";
import { UserAchievements } from "./user-achievements";
import { UserSkills } from "./user-skills";

export const UserSideBar = () => {
  return (
    <div className="w-81 relative -top-40 flex flex-col gap-10">
      <div className="w-full aspect-square rounded-full flex items-center justify-center bg-light-dark-2">
        <div className="size-75 bg-light-dark-1 rounded-full flex items-center justify-center">
          <div className="size-60 bg-light-dark-1 relative z-20 rounded-full flex items-center justify-center">
            <Image
              className="size-52 rounded-full"
              height={211}
              src="/dummy/user.jpg"
              width={211}
              loading="lazy"
              alt="User Img!"
            />
          </div>
        </div>
      </div>
      <UserAchievements />
      <UserSkills />
    </div>
  );
};
