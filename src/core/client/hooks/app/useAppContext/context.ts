"use client";

import { createContext } from "react";
import { useApp } from "..";

type Props = ReturnType<typeof useApp>;

export const AppContext = createContext<Props>({} as Props);
