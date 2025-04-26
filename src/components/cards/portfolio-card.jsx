import { HeartIcon } from "../icons/heart-icon";
import { CopyIcon } from "../icons/copy-icon";
import { EyeIcon } from "../icons/eye-icon";
import Image from "next/image";

export const PortfolioCard = ({ img }) => {
  return (
    <div className="flex flex-col">
      <div className="min-h-48 max-h-48 rounded-t-2xl">
        <Image
          src={img}
          className="size-full object-cover rounded-t-2xl"
          height={160}
          width={500}
          alt="Service Img!"
          loading="lazy"
        />
      </div>
      <div className="bg-light-dark-1 pt-2.25 pb-3 rounded-b-2xl px-3 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-white">Portfolio Title</h2>
          <p className="text-xs text-white/70">
            download e commerce website with 14 screens..
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-1">
              <EyeIcon className="size-4" />
              <span className="text-xs text-white">215</span>
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon className="size-4" />
              <span className="text-xs text-white">12</span>
            </div>
          </div>
          <button className="size-8 bg-primary rounded-full self-end cursor-pointer hover:bg-primary/80 grid place-items-center">
            <CopyIcon className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
