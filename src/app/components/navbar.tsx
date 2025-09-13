"use client";

import { Link } from "react-router-dom";

export default function Navbar() {
  return <ul className="flex list-none m-0 p-0 w-full bg-stone-300">
    <li className="flex bg-stone-400"><Link className="px-8 py-5" to="/login">Логин</Link></li>
    <li className="flex bg-stone-400"><Link className="px-8 py-5" to="/register">Регистрация</Link></li>
    <li className="flex ml-auto bg-stone-400"><Link className="px-8 py-5" to="/profile">Личный кабинет</Link></li>
  </ul>
}