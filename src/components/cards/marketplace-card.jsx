import Image from "next/image";
import { CopyIcon } from "../icons/copy-icon";
import { GroupIcon } from "../icons/group-icon";
import { WalletIcon } from "../icons/wallet-icon";

export const MarketPlaceCard = ({ img }) => {
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
          <h2 className="font-bold text-white">Service Title</h2>
          <p className="text-xs text-white/70">
            download e commerce website with 14 screens..
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-1">
              <GroupIcon className="size-4 text-primary" />
              <span className="text-xs text-white">12</span>
            </div>
            <div className="flex items-center gap-1">
              <WalletIcon className="size-4 text-primary" />
              <span className="text-xs text-white font-bold">24 SAR</span>
              <span className="text-[10px] text-white line-through">
                30 SAR
              </span>
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
