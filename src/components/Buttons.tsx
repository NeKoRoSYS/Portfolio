import { ButtonSchema } from "@/data/hyperlinks";
import { cn } from "@/lib/utils";
import { SmartLink } from "./Hyperlinks";

export default function Button({
  name,
  showHyperlinkIcon = false,
  truncate = false,
  children,
  icon,
  labelClass,
  iconClass,
  path,
  className = "",
}: ButtonSchema & {
  truncate?: boolean;
}) {
  const classOverride = cn(
    "relative overflow-clip container text-zinc-100 px-4 group h-8 w-fit flex flex-row items-center justify-center cursor-pointer",
    className,
  );

  return (
    <SmartLink
      path={path}
      name={name}
      icon={icon}
      showHyperlinkIcon={showHyperlinkIcon}
      className={classOverride}
      iconClass={cn(
        "w-6 sm:w-6 bg-white group-touch-hover:bg-white",
        iconClass,
      )}
      labelClass={cn(
        labelClass,
        icon && "mx-auto text-center",
        !truncate && "block sm:block",
      )}
      linkIconClass="w-5 sm:w-5 bg-zinc-400 group-touch-hover:bg-white"
    >
      {children}
    </SmartLink>
  );
}
