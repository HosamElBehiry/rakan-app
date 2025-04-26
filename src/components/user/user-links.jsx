"use client";

import { Link, usePathname } from "@/i18n/navigation";

export const UserLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-22">
      <li className="p-2.5 cursor-pointer group">
        <Link
          href="/user/services"
          className={`text-xl border-b group-hover:border-b-primary group-hover:text-primary font-bold pb-2.5 ${
            pathname === "/user/services"
              ? "border-b-primary text-primary"
              : "border-b-transparent text-white"
          }`}
        >
          Services
        </Link>
      </li>
      <li className="p-2.5 cursor-pointer group">
        <Link
          href="/user/portfolio"
          className={`text-xl border-b group-hover:border-b-primary group-hover:text-primary font-bold pb-2.5 ${
            pathname === "/user/portfolio"
              ? "border-b-primary text-primary"
              : "border-b-transparent text-white"
          }`}
        >
          Portfolio
        </Link>
      </li>
      <li className="p-2.5 cursor-pointer group">
        <Link
          href="/user/marketplace"
          className={`text-xl border-b group-hover:border-b-primary group-hover:text-primary font-bold pb-2.5 ${
            pathname === "/user/marketplace"
              ? "border-b-primary text-primary"
              : "border-b-transparent text-white"
          }`}
        >
          Marketplace
        </Link>
      </li>
      <li className="p-2.5 cursor-pointer group">
        <Link
          href="/user/reviews"
          className={`text-xl border-b group-hover:border-b-primary group-hover:text-primary font-bold pb-2.5 ${
            pathname === "/user/reviews"
              ? "border-b-primary text-primary"
              : "border-b-transparent text-white"
          }`}
        >
          Reviews (12)
        </Link>
      </li>
    </ul>
  );
};
