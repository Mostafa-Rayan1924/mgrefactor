import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="size-[100px]  relative">
      <Link href={`/`} className="size-full">
        <Image
          src={
            "https://res.cloudinary.com/dlaeaq6is/image/upload/v1740243694/Project2-MG-363925-removebg-preview_ao2eg4.png"
          }
          alt="logo"
          className="object-contain flex"
          fill
        />
      </Link>
    </div>
  );
};

export default Logo;
