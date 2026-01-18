"use client";

import React from "react";
import Link from "next/link";
import { Search, Settings, ChevronDown } from "lucide-react";
import { useNavbar } from "./hooks/useNavbar";

export function Navbar() {
    const { models } = useNavbar();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 bg-black/40 backdrop-blur-md border-b border-white/5">
            {/* Logo & Main Nav */}
            <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-2xl font-black text-white italic tracking-tighter">W</span>
                    <span className="text-sm font-medium text-white/80 tracking-widest pt-1">Festival</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {models.navLinks.map((link, index) => (
                        link.href ? (
                            <Link key={index} href={link.href} className="text-sm font-medium text-white hover:text-orange-500 transition-colors flex items-center gap-1.5">
                                {link.active && <span className="w-1 h-1 bg-white rounded-full"></span>} {link.label}
                            </Link>
                        ) : (
                            <button key={index} className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1">
                                {link.label} {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </button>
                        )
                    ))}
                </nav>
            </div>

            {/* Profile & Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 text-white/70 hover:text-white transition-colors">
                    <Search className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 pl-2 border-l border-white/10">
                    <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors p-1.5 pr-4 rounded-full cursor-pointer group">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-orange-500/20">
                            {models.user.initials}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-white">{models.user.name}</span>
                            <span className="text-[10px] text-white/40 group-hover:text-white/60">{models.user.type}</span>
                        </div>
                        <Settings className="w-3.5 h-3.5 text-white/40 ml-1" />
                    </div>
                </div>
            </div>
        </header>
    );
}
