import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import NavbarBtn from "./NavbarBtn";

const Navbar = () => {
    return (
        <nav className="h-16 border-b border-[#202125] bg-[#0b0c0e]">
            <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6">

                <Link
                    href="/workouts"
                    className="flex shrink-0 items-center gap-2"
                >
                    <Image
                        src={logo}
                        alt="FitLog"
                        width={26}
                        height={26}
                        className="object-contain"
                    />

                    <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
                        FITLOG
                    </span>
                </Link>


                <div className="mx-3">
                    <NavbarBtn />
                </div>


                <div className="flex shrink-0 items-center gap-3 text-xs sm:gap-5 sm:text-sm">

                    {/* Plan */}
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 text-[#a1a3aa] transition hover:text-white sm:gap-2"
                    >
                        <span className="">
                            Plan
                        </span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b7ff00] px-1 text-[10px] font-bold text-black">
                            0
                        </span>
                    </Link>


                    <Link
                        href="/my-plan"
                        className="hidden text-[#777a82] transition hover:text-white sm:block"
                    >
                        Saved
                    </Link>


                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#292b30] text-[10px] text-[#777a82]">
                        0
                    </span>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;
