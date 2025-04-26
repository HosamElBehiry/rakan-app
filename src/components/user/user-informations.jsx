import { SettingsIcon } from "../icons/settings-icon";
import Image from "next/image";

export const UserInformations = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-white text-3xl font-bold">Hisham Mousa</h2>
          <div className="flex items-center gap-4">
            <h6 className="py-2.5 text-white rounded-full px-6 bg-light-dark-1 text-sm">
              UX/UI Desinger
            </h6>
            <div className="size-12 flex items-center justify-center">
              <Image
                loading="lazy"
                src="/user/tag-1.png"
                className="object-contain"
                alt="Tag Img!"
                height={28}
                width={40}
              />
            </div>
          </div>
        </div>
        <button className="size-12.5 cursor-pointer bg-light-dark-1 rounded-full grid place-items-center">
          <SettingsIcon className="size-6 text-white" />
        </button>
      </div>
      <p className="text-sm max-w-130 text-white/70 ms-2">
        I create innovative and user-friendly digital experiences by blending
        creativity and functionality to design interfaces that inspire and
        engage users.
      </p>
    </div>
  );
};
