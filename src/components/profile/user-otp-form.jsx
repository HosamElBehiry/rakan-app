export const UserOtpForm = ({ step, setStep }) => {
  return (
    <div className="flex gap-5">
      {step < 1 ? (
        <span className="size-1.5 bg-primary relative -start-1 mt-2 rounded-full" />
      ) : (
        <span className="size-3 border-2 mt-1 relative -start-1.5 -top-1.5 bg-light-dark-1 border-primary rounded-full flex items-center justify-center">
          <span className="size-1.5 bg-primary rounded-full" />
        </span>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStep((prev) => prev + 1);
        }}
        className="w-116 flex items-center gap-6"
      >
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor=""
            className={`text-white ${
              step !== 1 ? "opacity-10" : "opacity-100"
            } text-sm`}
          >
            Enter Otp
          </label>
          <div className="flex items-center gap-2">
            <input
              disabled={step !== 1}
              className="w-12 h-10 bg-dark disabled:opacity-10 rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm"
            />
            <input
              disabled={step !== 1}
              className="w-12 h-10 bg-dark disabled:opacity-10 rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm"
            />
            <input
              disabled={step !== 1}
              className="w-12 h-10 bg-dark disabled:opacity-10 rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm"
            />
            <input
              disabled={step !== 1}
              className="w-12 h-10 bg-dark disabled:opacity-10 rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm"
            />
            <input
              disabled={step !== 1}
              className="w-12 h-10 bg-dark disabled:opacity-10 rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm"
            />
            <input
              disabled={step !== 1}
              className="w-12 h-10 bg-dark disabled:opacity-10 rounded-xl flex items-center justify-center text-center text-white caret:white outline-none text-sm"
            />
          </div>
        </div>
        <button
          disabled={step !== 1}
          className="bg-gray-1 disabled:opacity-10 disabled:cursor-not-allowed py-3 hover:bg-gray-1/70 self-end cursor-pointer text-white text-sm rounded-full font-bold w-27"
        >
          Send
        </button>
      </form>
    </div>
  );
};
