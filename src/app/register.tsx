"use client";

import { FormEvent, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { MobxContext } from "./provider";
import { observer } from "mobx-react-lite";

const Register = observer(() => {
  const nav = useNavigate();
  const store = useContext(MobxContext).registerStore;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    store.setIsLoading(true);

    axios.post(
      'http://localhost:3000/api/auth/register',
      { name: store.name, password: store.pass }
    ).then((r) => {
      if (!r.data.access_token) return store.setErrors(["Что-то пошло не так!"]);
      
      // TODO: set cookies on the server side
      // cookieStore.set('token', r.data.access_token);
      nav("/", { replace: true });
      store.reset();
    }).catch((e) => {
      const msg = e.response.data.message;

      switch (typeof msg) {
        case "object": return store.setErrors(msg);
        case "string": return store.setErrors([msg]);
        case "undefined": store.setErrors(["Что-то пошло не так!"])
      }
    }).finally(() => store.setIsLoading(false));
  }

  return <>
    <h1>РЕГИСТРАЦИЯ!</h1>
    <form onSubmit={onSubmit}>
      <label>Никнейм:</label>
      <input type="text" value={store.name} onChange={(e) => store.setName(e.target.value)} />

      <label>Пароль:</label>
      <input type="password" value={store.pass} onChange={(e) => store.setPass(e.target.value)} />

      <button disabled={store.isLoading} type="submit">Сабмит</button>
    </form>
    {store.errors.length > 0 && <h1>Ошибка!</h1>}
    {store.errors.map((msg, i) => <h1 key={`error_${i}`}>{msg}</h1>)}
  </>
});
export default Register;