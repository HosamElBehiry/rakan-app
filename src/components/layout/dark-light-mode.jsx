import { DarkModeIcon } from "../icons/dark-mode-icon";

export const DarkLightMode = () => {
  return (
    <div className="w-16 cursor-pointer p-1.5 rounded-full bg-primary">
      <button className="size-6 bg-white flex items-center justify-center rounded-full">
        <DarkModeIcon />
      </button>
    </div>
  );
};
