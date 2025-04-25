import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { AuthDescription } from "@/components/auth/auth-description";
import Image from "next/image";

const ForgotPasswordPage = async () => {
  return (
    <main className="min-h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 min-h-screen bg-black ps-25 pe-13 !py-27 flex flex-col justify-center overflow-y-auto gap-7.5">
        <AuthDescription title="Forget Password?" description="No worries!" />
        <p className="text-sm text-white/80">
          we’ve got you covered! Enter the email address associated with your
          account, and we’ll send you a one-time password (OTP) to reset your
          password.
        </p>
        <ForgotPasswordForm />
      </div>
      <div className="min-w-168 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover flex items-center justify-center">
        <Image
          loading="lazy"
          src="/auth/forgot-password-bg.png"
          className="w-108 h-96 object-contain"
          height={345}
          width={430}
          alt="Forgot Password Bg"
        />
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
