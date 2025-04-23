import { AuthDescription } from "@/components/auth/auth-description";
import { EmailIcon } from "@/components/icons/email-icon";
import { EyeIcon } from "@/components/icons/eye-icon";
import { UserIcon } from "@/components/icons/user-icon";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <main className="min-h-screen max-w-screen flex overflow-x-hidden">
      <div className="min-w-40 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover"></div>
      <div className="flex-1 min-h-screen bg-black ps-25 pe-13 !py-27 flex flex-col items-center justify-center overflow-y-auto gap-7.5">
        <AuthDescription
          title="Create Your Account"
          description="Join the platform to find the best freelancers for your projects."
        />
        <form
          action=""
          className="flex flex-col gap-8 items-center justify-center w-11/12 me-auto"
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Full Name
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <UserIcon className="size-4" />
              <input
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your Full Name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Email Address
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <EmailIcon className="size-4" />
              <input
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Password
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <EyeIcon className="size-4" />
              <input
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Enter Strong Password"
                type="password"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="text-white text-sm font-normal">
              Repeat Your Password
            </label>
            <div className="flex items-center gap-3 bg-dark p-3 rounded-[10px]">
              <EyeIcon className="size-4" />
              <input
                className="flex-1 placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
                placeholder="Repeat Strong Password"
                type="password"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="accept"
                className="appearance-none size-3.5 rounded-sm checked:bg-primary border border-primary cursor-pointer"
              />
              <label
                htmlFor="accept"
                className="text-xs flex-1 font-bold text-white cursor-pointer"
              >
                I agree to the{" "}
                <Link
                  href="/tell-us-more"
                  className="text-primary hover:underline"
                >
                  platform's terms
                </Link>{" "}
                and policies by creating My account.
              </label>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
            >
              Create Account
            </button>
            <div className="flex items-center justify-between">
              <p className="text-sm text-white font-bold">
                Do you have an account?
              </p>
              <Link
                href="/login"
                className="text-sm font-bold text-primary hover:underline"
              >
                Login here
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="min-w-168 min-h-screen bg-[url('/auth/sky-bg.png')] bg-cover flex items-center justify-center">
        <Image
          loading="lazy"
          src="/auth/register-client.png"
          className="w-108 h-96 object-contain"
          height={345}
          width={430}
          alt="Welcome Bg"
        />
      </div>
    </main>
  );
};

export default RegisterPage;
