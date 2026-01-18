"use client";

import React, { ReactNode } from "react";
import { useApp } from "..";
import { AppContext } from "./context";

type Props = {
    children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
    const appServices = useApp();

    return (
        <AppContext.Provider value={appServices}>
            {children}
        </AppContext.Provider>
    );
};
