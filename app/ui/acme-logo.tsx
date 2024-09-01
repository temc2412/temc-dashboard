import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({ weight: ["400"], subsets: ["latin"] });

export default function AcmeLogo(textColor: any) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      <GlobeAltIcon className="h-16 w-16 rotate-[15deg]" />
      <p className="text-[40px]">Temc</p>
    </div>
  );
}
