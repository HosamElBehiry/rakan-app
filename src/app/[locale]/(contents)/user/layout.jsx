import { UserInformations } from "@/components/user/user-informations";
import { UserSideBar } from "@/components/user/user-sidebar";
import { UserLinks } from "@/components/user/user-links";
import Image from "next/image";

const UserLayout = ({ children }) => {
  return (
    <section>
      <div className="absolute top-0 start-0 w-full h-full max-h-64 z-10">
        <Image
          src="/dummy/top-bg.png"
          className="size-full object-cover"
          height={256}
          width={1440}
          alt="Top Bg Img!"
        />
      </div>
      <div className="container mx-auto flex gap-20 mt-40 pb-40">
        <UserSideBar />
        <div className="flex-1 mt-6">
          <div className="flex flex-col gap-10">
            <UserInformations />
            <div className="flex flex-col gap-12">
              <UserLinks />
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLayout;
