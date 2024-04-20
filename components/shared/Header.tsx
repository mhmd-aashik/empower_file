import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b sticky bg-[#020617] top-0 z-30">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-fit font-ds flex gap-3 items-center">
          <p className="text-3xl font-bold font-dancingScript">
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
          <p className="text-3xl font-bold font-dancingScript">
            <span className="text-pink-500">w</span>
            <span className="text-yellow-500">e</span>
            <span className="text-red-500">r</span>
          </p>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
