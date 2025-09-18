"use client";

import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import RootStore from "@/stores/root-store";
import Navbar from "@/components/navbar";

export const MobxContext = createContext<RootStore>(null!);

export default function Provider() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  const [rootStore] = useState(() => new RootStore())

  return render ? (
    <BrowserRouter>
      <MobxContext value={rootStore}>
        <Navbar/>
        <AppRouter/>
      </MobxContext>
    </BrowserRouter>
  ) : null;
}