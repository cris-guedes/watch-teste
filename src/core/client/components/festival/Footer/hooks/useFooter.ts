import { Youtube, Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export function useFooter() {
    const models = {
        socials: [
            { icon: Youtube, label: "Youtube" },
            { icon: Linkedin, label: "Linkedin" },
            { icon: Instagram, label: "Instagram" },
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
        ],
        year: 2026,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
