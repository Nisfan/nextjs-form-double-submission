import Link from "next/link";
import * as React from "react";

export default async function LoginPage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Click <Link href="/products">products</Link> link to reproduce the error
      </p>
    </>
  );
}
