import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { AuthDescription } from "@/components/auth/auth-description";
import Image from "next/image";

const ResetPasswordPage = async () => {
  return (
    <main className="min-h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 min-h-screen bg-black ps-25 pe-13 !py-27 flex flex-col justify-center overflow-y-auto gap-7.5">
        <AuthDescription
          title="Set New Password"
          description="Create a New Passwordy"
        />
        <p className="text-sm text-white/80">
          Choose a strong and secure password to protect your account.
        </p>
        <ResetPasswordForm />
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

export default ResetPasswordPage;
