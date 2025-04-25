"use client";

import { useRouter } from "@/i18n/navigation";

export const OtpForm = () => {
  const { push } = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        push("/reset-password");
      }}
      className="flex flex-col gap-12"
    >
      <div className="flex flex-col gap-2.5">
        <label className="text-white text-sm">Enter OTP</label>
        <div className="flex items-center gap-4">
          <input className="size-12 bg-dark rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm" />
          <input className="size-12 bg-dark rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm" />
          <input className="size-12 bg-dark rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm" />
          <input className="size-12 bg-dark rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm" />
          <input className="size-12 bg-dark rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm" />
          <input className="size-12 bg-dark rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
        >
          Send Otp
        </button>
        <div className="flex items-center justify-between">
          <p className="text-sm text-white">Didn’t receive the OTP?</p>
          <button
            type="button"
            className="text-sm font-bold text-primary cursor-pointer"
          >
            Resend Code
          </button>
        </div>
      </div>
    </form>
  );
};
