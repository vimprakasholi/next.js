import config from "@/config";
import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";

const Logo = ({ className = "text-2xl" }) => {
  const { appName } = config;
  const appNameParts = appName.split(" ");

  return (
    <Link href={HOME_ROUTE} className="text-xl">
      <div className={`flex justify-start items-center font-bold w-40 ${className}`}>
        <span className="text-primary">{appNameParts[0]}</span>
        <span className="text-secondary">{appNameParts[1]}</span>
      </div>
    </Link>
  );
};

export default Logo;
