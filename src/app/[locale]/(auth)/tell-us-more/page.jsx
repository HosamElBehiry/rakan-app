import { AuthDescription } from "@/components/auth/auth-description";
import { TellUsForm } from "@/components/auth/tell-us-form";
import Image from "next/image";

const TellUsMorePage = async ({ searchParams }) => {
  const { type } = await searchParams;
  return (
    <main className="min-h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 min-h-screen bg-black ps-25 pe-13 !py-27 flex flex-col overflow-y-auto gap-8">
        <AuthDescription
          title="Tell Us More"
          description="Tell freelancers about your business or goals"
        />
        <TellUsForm />
      </div>
      <div className="min-w-168 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover flex items-center justify-center">
        <Image
          loading="lazy"
          src={`/auth/tell-us-${type}.png`}
          className="w-108 h-96 object-contain"
          height={345}
          width={430}
          alt="Welcome Bg"
        />
      </div>
    </main>
  );
};

export default TellUsMorePage;
