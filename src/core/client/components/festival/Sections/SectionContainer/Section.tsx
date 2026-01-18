"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/core/client/components/ui/Button";
import { SectionProps, useSection } from "./hooks/useSection";

export function Section(props: SectionProps) {
    const { models } = useSection(props);

    return (
        <section className="space-y-6">
            <div className="flex items-end justify-between">
                <div className="space-y-1.5">
                    <h2 className="text-2xl font-black text-white tracking-tighter leading-tight">{models.title}</h2>
                    {models.subtitle && (
                        <p className="text-[11px] text-white/40 max-w-md font-black tracking-widest">
                            {models.subtitle}
                        </p>
                    )}
                </div>
                {(models.href || models.cta) && (
                    <div className="flex items-center gap-4 group cursor-pointer">
                        {models.cta && (
                            <Button className="bg-[#E96744] hover:bg-[#d1593c] h-9 px-6 text-[10px] font-black rounded-sm tracking-widest">
                                {models.cta}
                            </Button>
                        )}

                    </div>
                )}
            </div>
            <div className="-mr-[calc((100vw-100%)/2+1.5rem)]">
                {models.children}
            </div>
        </section>
    );
}
