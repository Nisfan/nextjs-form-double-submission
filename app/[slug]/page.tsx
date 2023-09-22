import * as React from "react";
import Link from "next/link";

export default async function Page({ params }) {
  return (
    <>
      <h1>{params.slug}</h1>

      <Link href="../product-category/machine">Machines</Link>
    </>
  );
}
