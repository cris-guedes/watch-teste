"use client";

import { useMemo } from "react";
import { useFestival } from "../use-festival";
import { useAppStore } from "../../store/useAppStore";

export const useApp = () => {
    const festival = useFestival();
    const appState = useAppStore();

    return useMemo(() => ({
        ...festival,
        ...appState
    }), [festival, appState]);
};
