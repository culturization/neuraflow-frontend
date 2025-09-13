"use client";

import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import loadable from "@loadable/component";

const AsyncPage = loadable((props: { page: string }) => import(`./${props.page}`), {
  cacheKey: (props) => props.page
});

export default function AppRouter() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <>
      <Navbar />
      <Routes>
        <Route path="/profile" element={<h1>Типо ЛК</h1>} />
        <Route path="/login" element={<AsyncPage page="login" />} />
        <Route path="/register" element={<AsyncPage page="register" />} />
      </Routes>
    </>
  ) : null;
}