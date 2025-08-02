import { Icon } from "@/app/svgs/Icons";
import Image from "next/image";
import Link from "next/link";

const SocialIcons = [
  {
    icon: (
      <Icon
        name="github"
        className="size-[1.65em] opacity-65 hover:text-fuchsia-500"
      />
    ),
    link: "https://www.github.com/sumit-dey-69",
  },
  {
    icon: (
      <Icon
        name="linkedin"
        className="size-[1.65em] opacity-65 hover:text-blue-500"
      />
    ),
    link: "",
  },
  {
    icon: (
      <Icon name="X" className="size-[1.65em] opacity-65 hover:opacity-100" />
    ),
    link: "",
  },
];

function Navbar() {
  return (
    <div className="absolute flex items-center justify-between p-5 z-20 w-[100%]">
      <Image
        src={"/image.webp"}
        alt="Display Picture"
        className="size-15 rounded-[999px]"
        width={100}
        height={100}
      />

      <div className="flex items-center">
        {SocialIcons.map((icon, idx) => (
          <Link
            key={`${icon}-${idx}`}
            href={icon.link}
            className="hover:scale-125 hover:transition-all p-4"
            
          >
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
