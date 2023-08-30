import * as React from "react";
import { Button } from "./button";
import { revalidatePath } from "next/cache";

async function loginUser(_: FormData) {
  "use server";
  revalidatePath("/");
}

export default async function LoginPage() {
  return (
    <>
      <h1>Login</h1>

      <form action={loginUser}>
        <label htmlFor="username">Username</label>
        <input name="username" placeholder="ex: johndoe" id="username" />

        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="ex: super5cr$t"
          id="password"
        />
        <br />

        <Button>Login</Button>
      </form>
    </>
  );
}
