"use client";
import { addToCart } from "@/app/serverActions";
import * as React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add to cart
    </button>
  );
}

export default async function Page() {
  return (
    <>
      <h1>Add to cart</h1>
      <form action={addToCart}>
        <SubmitButton />
      </form>
    </>
  );
}
