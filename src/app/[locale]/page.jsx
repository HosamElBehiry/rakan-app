import { AuthDescription } from "@/components/auth/auth-description";
import { WhoAreYou } from "@/components/auth/who-are-you";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 bg-black ps-25 pe-13 flex flex-col items-center min-h-screen justify-center gap-15">
        <AuthDescription
          title="Welcome To Rakan Website"
          description="We are Happy To see you here!"
        />
        <WhoAreYou />
      </div>
      <div className="min-w-168 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover flex items-center justify-center">
        <Image
          loading="lazy"
          src="/auth/welcome-bg.png"
          className="w-108 h-96 object-contain"
          height={345}
          width={430}
          alt="Welcome Bg"
        />
      </div>
    </main>
  );
};

export default HomePage;
