import { Link } from "@/i18n/navigation";

export const UserLinks = () => {
  return (
    <ul className="flex items-center gap-22">
      <li className=" text-primary p-2.5 cursor-pointer group">
        <Link
          href="/user/services"
          className="text-xl border-b group-hover:border-b-primary group-hover:text-primary font-bold pb-2.5 border-b-primary"
        >
          Services
        </Link>
      </li>
      <li className=" text-white p-2.5 cursor-pointer group">
        <Link
          href="/user/services"
          className="text-xl border-b group-hover:border-b-primary group-hover:text-primary pb-2.5 border-b-transparent"
        >
          Portfolio
        </Link>
      </li>
      <li className=" text-white p-2.5 cursor-pointer group">
        <Link
          href="/user/services"
          className="text-xl border-b group-hover:border-b-primary group-hover:text-primary pb-2.5 border-b-transparent"
        >
          Marketplace
        </Link>
      </li>
      <li className=" text-white p-2.5 cursor-pointer group">
        <Link
          href="/user/services"
          className="text-xl border-b group-hover:border-b-primary group-hover:text-primary pb-2.5 border-b-transparent"
        >
          Reviews (12)
        </Link>
      </li>
    </ul>
  );
};
