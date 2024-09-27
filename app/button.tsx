"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";

export function Button({ children }) {
  const { pending } = useFormStatus(); //Oops! another bug?

  console.log("pending status", pending);

  return (
    <button type="submit" disabled={pending}>
      {pending ? "submitting" : children}
    </button>
  );
}
