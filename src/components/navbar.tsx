"use client";

import { PreloadLink } from "./preload-link";

export default function Navbar() {
  return <ul className="flex list-none m-0 p-0 w-full bg-stone-300">
    <li className="flex bg-stone-400"><PreloadLink className="px-8 py-5" component="login" to="/login">Логин</PreloadLink></li>
    <li className="flex bg-stone-400"><PreloadLink className="px-8 py-5" component="register" to="/register">Регистрация</PreloadLink></li>
    <li className="flex ml-auto bg-stone-400"><PreloadLink className="px-8 py-5" component="profile" to="/profile">Личный кабинет</PreloadLink></li>
  </ul>
}