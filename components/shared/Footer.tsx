import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-[#020617] ">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-fit font-ds flex gap-3 items-center">
          <p className=" font-bold">
            <span className="text-blue-500">E</span>
            <span className="text-purple-500">m</span>
            <span className="text-green-500">p</span>
          </p>
          <Image
            src="/assets/icons/logo.svg"
            width={32}
            height={32}
            alt="Evently logo"
            className="overflow-hidden scale-[1.9]"
          />
          <p className="text-3xl font-poppins font-bold">
            <span className="text-pink-500">w</span>
            <span className="text-yellow-500">e</span>
            <span className="text-red-500">r</span>
          </p>
        </Link>
        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
