"use client";
import { addToCart } from "@/app/serverActions";
import * as React from "react";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? "Loading..." : "Add to cart"}
    </button>
  );
}

export default function Page() {
  const [state, formAction] = useFormState(addToCart, {
    error: null,
    success: false,
  });

  console.log("AddressInputForm.state", state);
  return (
    <>
      <h1>Add to cart</h1>
      <form action={formAction}>
        <SubmitButton />
      </form>
    </>
  );
}
