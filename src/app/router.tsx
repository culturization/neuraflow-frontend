"use client";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const AsyncPage = loadable((props: { page: string }) => import(`./${props.page}`), {
  cacheKey: (props) => props.page
});

export default function AppRouter(props: { reqCookies: RequestCookie[] }) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <>
      <Routes>
        <Route path="/profile" element={<h1>Типо ЛК</h1>} />
        <Route path="/login" element={<AsyncPage page="login" />} />
        <Route path="/register" element={<AsyncPage page="register" />} />
      </Routes>
    </>
  ) : null;
}