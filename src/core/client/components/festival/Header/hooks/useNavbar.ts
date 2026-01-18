export function useNavbar() {
    const models = {
        user: {
            name: "Peter Parker",
            initials: "PP",
            type: "Pro Account",
        },
        navLinks: [
            { href: "/", label: "Home", active: true },
            { label: "Live", hasDropdown: true },
            { label: "Musical Styles", hasDropdown: true },
            { label: "Exclusive Content", hasDropdown: true },
        ],
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
