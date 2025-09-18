"use client";

import { useEffect, useState } from "react";
import { Route, Routes, } from "react-router-dom";
import loadable from "@loadable/component";

const AsyncPage = loadable((props: { page: string }) => import(`./${props.page}`), {
  cacheKey: (props) => props.page
});

export default function AppRouter() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <Routes>
      <Route path="/" element={<AsyncPage page="landing"/>} />
      <Route path="/profile" element={<AsyncPage page="profile"/>} />
      <Route path="/login" element={<AsyncPage page="login"/>} />
      <Route path="/register" element={<AsyncPage page="register"/>} />
    </Routes>
  ) : null;
}