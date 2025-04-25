import { EmailIcon } from "../icons/email-icon";
import { Link } from "@/i18n/navigation";

export const TellUsForm = () => {
  return (
    <form action="" className="flex flex-col gap-7.5">
      <div className="flex flex-col gap-3.5 items-center justify-center">
        <p className="text-sm font-bold text-white">
          What type of services are you interested in hiring freelancers for?
        </p>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((info) => (
            <div key={info} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="appearance-none border min-w-3.5 max-w-3.5 min-h-3.5 max-h-3.5 flex-1 border-primary rounded-sm checked:bg-primary cursor-pointer"
                id={info}
              />
              <label
                htmlFor={info}
                className="text-xs text-white cursor-pointer"
              >
                Programming
              </label>
            </div>
          ))}
          <button className="text-xs cursor-pointer w-fit hover:underline text-primary font-bold">
            See More..
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <label htmlFor="description" className="text-white font-bold text-xs">
          Tell freelancers about your business or goals.
        </label>
        <div className="flex gap-3 bg-dark p-2.5 rounded-[10px] min-h-28">
          <EmailIcon className="mt-1" />
          <textarea
            name=""
            id="description"
            placeholder="Write a description here"
            className="flex-1 resize-none placeholder:text-white/70 outline-none caret-white text-white/70 text-sm"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <button
          type="submit"
          className="bg-primary text-white py-2.5 w-full rounded-[10px] font-bold cursor-pointer hover:bg-primary/90"
        >
          Create Account
        </button>
        <Link
          href="#"
          className="text-white hover:underline text-sm text-center"
        >
          Skip for Now
        </Link>
      </div>
    </form>
  );
};
