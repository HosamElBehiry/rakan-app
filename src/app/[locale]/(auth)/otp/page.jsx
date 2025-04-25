import { AuthDescription } from "@/components/auth/auth-description";
import { OtpForm } from "@/components/auth/otp-form";
import Image from "next/image";

const OtpPage = async () => {
  return (
    <main className="min-h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 min-h-screen bg-black ps-25 pe-13 !py-27 flex flex-col justify-center overflow-y-auto gap-7.5">
        <AuthDescription title="Enter OTP" description="Verify Your Identity" />
        <p className="text-sm text-white/80">
          We’ve sent a 6-digit OTP to your email. Please enter it below to
          proceed.
        </p>
        <OtpForm />
      </div>
      <div className="min-w-168 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover flex items-center justify-center">
        <Image
          loading="lazy"
          src="/auth/forgot-password-bg.png"
          className="w-108 h-96 object-contain"
          height={345}
          width={430}
          alt="Otp Img !"
        />
      </div>
    </main>
  );
};

export default OtpPage;
