import Image from "next/image";
import { CircleArrowsIcon } from "../icons/circle-arrows-icon";

export const ProfileImg = ({ setFieldValue }) => {
  return (
    <div className="size-29 mx-auto relative border-4 border-light-dark-1 rounded-full flex items-center justify-center">
      <Image
        loading="lazy"
        src="/dummy/user.jpg"
        className="size-27 object-cover rounded-full"
        height={110}
        width={110}
        alt="User Img!"
      />
      <Image
        className="absolute bottom-0 start-1/2 -translate-x-1/2 z-50"
        src="/user/user-profile-bottom-img.png"
        height={100}
        width={100}
        alt="Bottom Constant Img!"
      />
      <label
        htmlFor="user-img"
        className="absolute bottom-1 cursor-pointer start-1/2 -translate-x-1/2 text-white z-60"
      >
        <CircleArrowsIcon />
        <input
          onChange={(e) => setFieldValue("img", e.target.files?.[0])}
          name="img"
          type="file"
          className="hidden"
          id="user-img"
        />
      </label>
    </div>
  );
};
