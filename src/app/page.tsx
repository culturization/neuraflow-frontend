"use client";

import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import AppRouter from "./router";

const AsyncPage = loadable((props: { page: string, setPrevComp: SetStr }) => import(`./${props.page}`), {
  cacheKey: (props) => props.page
});

export default function App() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  ) : null;
}