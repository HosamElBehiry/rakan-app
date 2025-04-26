import { ArrowToDownIcon } from "@/components/icons/arrow-to-down-icon";
import { HalfStarIcon } from "@/components/icons/half-star-icon";
import { StarIcon } from "@/components/icons/star-icon";
import Image from "next/image";

const ReviewsPage = () => {
  return (
    <section className="flex flex-col gap-5">
      {[1, 2, 3, 4].map((info) => (
        <div
          key={info}
          className="p-4.5 bg-dark rounded-[27px] flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image
                loading="lazy"
                src="/user/user-review.jpg"
                className="size-11.5 object-cover rounded-md"
                height={45}
                width={45}
                alt="User review"
              />
              <div className="flex flex-col gap-1">
                <h5 className="text-white text-sm font-bold">Mariam Mohamed</h5>
                <span className="flex items-center justify-center text-[10px] text-white py-1 w-15 rounded-full bg-light-dark-1">
                  Client
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((info) => (
                <StarIcon key={info} className="size-5.5" />
              ))}
              <HalfStarIcon className="-ms-0.5 size-6.5" />
              <span className="text-xs font-bold text-white">(4.5)</span>
            </div>
          </div>
          <p className="text-white text-[15px]">
            I worked with this freelancer on a project. The results were decent
            and met some of my expectations. However, the communication could
            have been faster and more clear. Overall, the work was acceptable
            but not outstanding. Would consider working with them again with
            more clarification upfront.
          </p>
          <div className="flex gap-1">
            <ArrowToDownIcon />
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-2.5">
                <Image
                  loading="lazy"
                  src="/dummy/user.jpg"
                  className="size-11.5 object-cover rounded-md"
                  height={45}
                  width={45}
                  alt="User review"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.75">
                    <h5 className="text-sm text-white font-bold">
                      Ahmed Mohamed
                    </h5>
                    <span className="flex items-center justify-center text-[10px] text-white py-1.25 w-22 rounded-full bg-light-dark-1">
                      Freelancer
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <StarIcon className="size-5" />
                    <span className="text-white text-xs mt-1">(4.5)</span>
                  </div>
                </div>
              </div>
              <p className="text-white">Thanks A lot Mariam</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReviewsPage;
