import { useState } from "react";
import { UserOtpForm } from "./user-otp-form";
import { EnvelopeIcon } from "../icons/envelope-icon";
import { UserNewEmailForm } from "./user-new-email-form";
import { UserCurrentEmailForm } from "./user-current-email-form";

export const ChangeUserEmail = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <EnvelopeIcon className="size-4 text-primary" />
        <h5 className="text-primary font-bold text-sm">Change Your Email</h5>
      </div>
      <div className="flex flex-col gap-16 relative">
        <span className="absolute top-0 -start-0.25 w-0.25 h-[83%] bg-white/60" />
        {step === 1 ? (
          <span className="absolute top-0 -start-0.25 w-0.25 h-[calc(83%/2)] bg-primary" />
        ) : step === 2 ? (
          <span className="absolute top-0 -start-0.25 w-0.25 h-[83%] bg-primary" />
        ) : null}
        <UserCurrentEmailForm step={step} setStep={setStep} />
        <UserOtpForm step={step} setStep={setStep} />
        <UserNewEmailForm setStep={setStep} step={step} />
      </div>
    </div>
  );
};
