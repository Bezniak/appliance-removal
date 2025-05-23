'use client';

import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import DesktopNav from "@/app/components/(Navbar)/DesktopNav";
import MobileNav from "@/app/components/(Navbar)/MobileNav";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const wrapperRef = useRef(null); // общий ref

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setMobileMenuOpen(false);
                setShowServices(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenuOpen]);

    return (
        <nav className="sticky top-0 z-50 bg-white py-6 px-6 flex justify-between items-center transition-colors duration-300">
            <div className="hidden md:flex items-center mx-auto gap-8">
                <DesktopNav />
            </div>

            <div className="w-full md:hidden flex items-center justify-between" ref={wrapperRef}>
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Логотип" width={52} height={52} priority />
                </Link>
                <div className='block'>
                    <a
                        href="tel:+375333669979"
                        className="text-xl font-bold text-lime-600 hover:text-yellow-500 transition"
                    >
                        +375 29 762 18 47
                    </a>
                </div>
                <Button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="bg-lime-600 hover:bg-lime-700 text-white font-semibold !px-4 py-6 rounded-lg transition-transform hover:scale-105 active:scale-95"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </Button>

                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-lime-300 z-40 md:hidden">
                        <MobileNav
                            setMobileMenuOpen={setMobileMenuOpen}
                            showServices={showServices}
                            toggleServices={() => setShowServices(prev => !prev)}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
};


export default Navbar;
