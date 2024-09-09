import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

export function CreateCustomers() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-khaki px-4 text-sm font-medium text-davysgray transition-colors hover:bg-davysgray hover:text-khaki focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-davysgray"
    >
      <span className="hidden md:block">Agregar Cliente</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
