'use client';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppRouter from "./router";

export default function App() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <div>
      <ul className="flex list-none m-0 p-0 w-full bg-stone-300">
        <li className="flex bg-stone-400 px-8 py-5"><Link to="/login">Логин</Link></li>
        <li className="flex bg-stone-400 px-8 py-5"><Link to="/register">Регистрация</Link></li>
        <li className="flex ml-auto bg-stone-400 px-8 py-5"><Link to="/profile">Личный кабинет</Link></li>
      </ul>
      <AppRouter />
    </div>
  ) : null;
}