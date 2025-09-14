"use client";

import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import RegisterStore from "./stores/register.store";
import Navbar from "./components/navbar";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const MobxCtxValue = { registerStore: new RegisterStore() };
export const MobxContext = createContext(MobxCtxValue);

export default function Provider(props: { reqCookies: RequestCookie[] }) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <BrowserRouter>
      <MobxContext.Provider value={MobxCtxValue}>
        <Navbar />
        <AppRouter reqCookies={props.reqCookies}/>
      </MobxContext.Provider>
    </BrowserRouter>
  ) : null;
}