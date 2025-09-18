"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import { LoginRegisterStore } from "@/stores/login-register-store";
import { preloadNav } from "./functions";

export default observer(() => {
  const [store] = useState(() => new LoginRegisterStore());

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    store.setIsLoading(true);

    // TODO: убрать повторения
    axios.post(
      'http://localhost:3000/api/auth/login',
      { email: store.email, password: store.pass }
    ).then((r) => {
      localStorage.setItem('tok', r.data.access_token); // Страшно!
      preloadNav("/", "landing");
      store.reset();
    }).catch((e) => {
      store.setErrors([e.response.data.message || "Что-то пошло не так!"].flat());
    }).finally(() => store.setIsLoading(false));
  }

  return <>
    <h1>ЛОГИН!</h1>
    <form onSubmit={onSubmit}>
      <label>ID:</label>
      <input type="number" value={store.email} onChange={(e) => store.setEmail(e.target.value)} />

      <label>Пароль:</label>
      <input type="password" value={store.pass} onChange={(e) => store.setPass(e.target.value)} />

      <button disabled={store.isLoading} type="submit">Сабмит</button>
    </form>
    {store.errors.length > 0 && <h1>Ошибка!</h1>}
    {store.errors.map((msg, i) => <h1 key={`error_${i}`}>{msg}</h1>)}
  </>
});