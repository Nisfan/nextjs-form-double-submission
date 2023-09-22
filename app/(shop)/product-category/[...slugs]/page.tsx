import * as React from "react";
import { Button } from "@/app/button";

async function loginUser(_: FormData) {
  "use server";

  //This console.log printed twice by clicking `Add to cart` button
  console.log("addToCart");
}

export default async function Page() {
  return (
    <>
      <h1>Add to cart</h1>
      <form action={loginUser}>
        <Button>Add to cart</Button>
      </form>
    </>
  );
}
