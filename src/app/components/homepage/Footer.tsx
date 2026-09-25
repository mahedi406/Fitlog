import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
                
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                        <Image
                            src={logo}
                            alt="FitLog"
                            width={26}
                            height={26}
                            className="object-contain"
                        />
                    </div>

                    <span className="text-base font-extrabold tracking-tight text-white sm:text-lg">
                        FITLOG
                    </span>
                </div>

                {/* Copyright */}
                <p className="text-center text-xs text-gray-400 sm:text-right sm:text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
