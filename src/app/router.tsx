import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/profile" element={<h1>Типо ЛК</h1>} />
      <Route path="/login" element={<h1>Логин</h1>} />
      <Route path="/register" element={<h1>Регистрация</h1>} />
    </Routes>
  );
}