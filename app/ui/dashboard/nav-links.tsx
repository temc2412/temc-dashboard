"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Inicio", href: "/dashboard", icon: HomeIcon },
  {
    name: "Facturas",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Clientes", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md text-snow p-3 text-sm font-medium hover:bg-khaki hover:text-davysgray md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-khaki": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
