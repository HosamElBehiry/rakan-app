import { AuthDescription } from "@/components/auth/auth-description";
import { FaceBookIcon } from "@/components/icons/facebook-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

const LoginPage = async () => {
  return (
    <main className="min-h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 min-h-screen bg-black ps-25 pe-13 !py-27 flex flex-col justify-center overflow-y-auto gap-7.5">
        <AuthDescription
          title="Welcome Back! "
          description="Log in to Your Account."
        />
        <div className="flex flex-col gap-3 w-full">
          <button className="p-2.5 bg-dark rounded-lg flex items-center gap-2.5 cursor-pointer">
            <GoogleIcon />
            <span className="text-white text-sm">Log in with Google</span>
          </button>
          <button className="p-2.5 bg-dark rounded-lg flex items-center gap-2.5 cursor-pointer">
            <FaceBookIcon />
            <span className="text-white text-sm">Log in with Facebook</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <hr className="flex-1 border border-dark" />
          <span className="text-xs text-white">Or</span>
          <hr className="flex-1 border border-dark" />
        </div>
        <LoginForm />
      </div>
      <div className="min-w-168 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover flex items-center justify-center">
        <Image
          loading="lazy"
          src="/auth/login-bg.png"
          className="w-108 h-96 object-contain"
          height={345}
          width={430}
          alt="Login Bg"
        />
      </div>
    </main>
  );
};

export default LoginPage;
