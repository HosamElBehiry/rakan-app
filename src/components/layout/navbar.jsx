import { AddCircleIcon } from "../icons/add-circle-icon";

export const Navbar = () => {
  return (
    <ul className="flex items-center gap-7">
      <li className="size-10 cursor-pointer rounded-xl flex items-center justify-center text-white bg-primary">
        <AddCircleIcon className="size-5 text-white" />
      </li>
      <li className="text-white text-sm hover:underline cursor-pointer">
        Projects
      </li>
      <li className="text-white text-sm hover:underline cursor-pointer">
        My Offers
      </li>
      <li className="text-white text-sm hover:underline cursor-pointer">
        Marketplace
      </li>
      <li className="text-white text-sm hover:underline cursor-pointer">
        Freelancers
      </li>
      <li className="text-white text-sm hover:underline cursor-pointer">
        Marketers
      </li>
    </ul>
  );
};
