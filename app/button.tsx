"use client";

import * as React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function Button() {
  const status = useFormStatus();

  return (
    <button disabled={status.pending}>
      Submit {status.pending && <>(submitting)</>}
    </button>
  );
}
