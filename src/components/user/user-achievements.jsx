import { HalfStarIcon } from "../icons/half-star-icon";
import { TimeIcon } from "../icons/time-icon";
import { StarIcon } from "../icons/star-icon";
import Image from "next/image";

export const UserAchievements = () => {
  return (
    <div className="p-6 rounded-3xl flex flex-col gap-4 bg-light-dark-2">
      <div className="flex items-center gap-2.5">
        <Image
          src="/dummy/service-main-img.jpg"
          className="size-20 rounded-xl"
          height={80}
          width={80}
          alt="Service Main Img!"
        />
        <div className="space-y-1.5">
          <h3 className="text-primary font-bold">PixelNest</h3>
          <p className="text-xs text-white/70">
            Building digital homes for seamless user experiences
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white font-bold text-sm">
          Freelancer Rating (12 Review)
        </h2>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((info) => (
            <StarIcon key={info} />
          ))}
          <HalfStarIcon className="-ms-0.5" />
        </div>
      </div>
      <div className="flex flex-col gap-4.5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="p-c-r" className="text-xs text-white">
            Project Completion Rate
          </label>
          <div className="flex items-center gap-2">
            <div className="h-5 flex-1 bg-light-dark-1 relative rounded-full">
              <span className="absolute w-[90%] h-full top-0 start-0 bg-primary rounded-full" />
            </div>
            <span className="text-sm text-white">90%</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="o-t-d" className="text-xs text-white">
            On-Time Delivery
          </label>
          <div className="flex items-center gap-2">
            <div className="h-5 flex-1 bg-light-dark-1 relative rounded-full">
              <span className="absolute w-[60%] h-full top-0 start-0 bg-primary rounded-full" />
            </div>
            <span className="text-sm text-white">60%</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="o-t-d" className="text-xs text-white">
            Average Response time
          </label>
          <div className="flex items-center gap-2 text-primary">
            <TimeIcon className="size-4.5" />
            <span className="text-sm font-bold">30 min</span>
          </div>
        </div>
      </div>
    </div>
  );
};
