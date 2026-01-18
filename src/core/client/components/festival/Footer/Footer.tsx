"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, Apple } from "lucide-react";
import { useFooter } from "./hooks/useFooter";

export function Footer() {
    const { models } = useFooter();

    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4 max-w-lg">
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-black text-white italic tracking-tighter">W</span>
                            <span className="text-sm font-medium text-white/80 tracking-widest pt-1">Festival</span>
                        </div>
                        <p className="text-[10px] text-white/30 leading-relaxed tracking-widest">
                            W Festival is a digital platform created for music lovers. Experience live concerts from anywhere in the world with multiple camera angles and high-fidelity sound. Explore our exclusive content and re-watch your favorite performances anytime.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {models.socials.map((social) => (
                            <SocialIcon key={social.label} icon={social.icon} />
                        ))}
                    </div>
                </div>

                {/* Links & Apps */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/5 pt-8">
                    <div className="flex flex-wrap gap-8">
                        <FooterLink href="#">About W Festival</FooterLink>
                        <FooterLink href="#">Terms of use & privacy</FooterLink>
                        <FooterLink href="#">Send Feedback</FooterLink>
                        <FooterLink href="#">Help Center</FooterLink>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 transition-colors px-4 py-2 rounded-lg border border-white/5">
                            <Smartphone className="w-6 h-6 text-white" />
                            <div className="flex flex-col items-start translate-y-[1px]">
                                <span className="text-[8px] text-white/40 font-black tracking-tighter">Get it on</span>
                                <span className="text-sm text-white font-black tracking-tight leading-none">Google Play</span>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 transition-colors px-4 py-2 rounded-lg border border-white/5">
                            <Apple className="w-6 h-6 text-white" />
                            <div className="flex flex-col items-start translate-y-[1px]">
                                <span className="text-[8px] text-white/40 font-black tracking-tighter">Download on the</span>
                                <span className="text-sm text-white font-black tracking-tight leading-none">App Store</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <p className="text-[9px] font-bold text-white/20 tracking-[0.3em]">
                        © {models.year} W Festival. All rights reserved. Music connects us all.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all hover:scale-110">
            <Icon className="w-5 h-5" />
        </button>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-[10px] font-black text-white/40 hover:text-white transition-colors tracking-widest">
            {children}
        </Link>
    );
}
