import { WelcomeIcon } from "../icons/welcome-svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <WelcomeIcon />
      <h2 className="font-bold text-white">RAKAN Website</h2>
    </div>
  );
};
