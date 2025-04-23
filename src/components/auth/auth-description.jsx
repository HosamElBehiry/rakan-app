import { WelcomeIcon } from "../icons/welcome-svg";

export const AuthDescription = ({ title = "", description = "" }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5">
        <WelcomeIcon className="size-10" />
        <p className="text-white font-normal">RAKAN Website</p>
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-primary text-sm">{description}</p>
    </div>
  );
};
