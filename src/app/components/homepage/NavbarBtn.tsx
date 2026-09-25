"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarBtn = () => {
    const pathname = usePathname();

    const isWorkouts = pathname === "/workouts";
    const isMyPlan = pathname === "/my-plan";

    return (
        <div className="flex items-center gap-1 rounded-full bg-[#111214] p-1">

            <Link
                href="/workouts"
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-5 sm:py-2 sm:text-sm ${
                    isWorkouts
                        ? "bg-[#182600] text-[#b7ff00]"
                        : "text-[#777a82] hover:text-white"
                }`}
            >
                Workouts
            </Link>

            <Link
                href="/my-plan"
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-5 sm:py-2 sm:text-sm ${
                    isMyPlan
                        ? "bg-[#182600] text-[#b7ff00]"
                        : "text-[#777a82] hover:text-white"
                }`}
            >
                My Plan
            </Link>

        </div>
    );
};

export default NavbarBtn;
