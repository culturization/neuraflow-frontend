"use server";

import { cookies } from "next/headers";
import Provider from "./provider";

export default async function App() {
  // TODO: encrypted cookies
  const reqCookies = (await cookies()).getAll();

  return <Provider reqCookies={reqCookies}/>
}