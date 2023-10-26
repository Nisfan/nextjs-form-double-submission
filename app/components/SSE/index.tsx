"use client";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

export default function SSE() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  React.useEffect(() => {
    console.log("listening to SSE event");
    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_SSE_URL}/sse`,
    );

    const eventMessageListener = async (e) => {
      const payload = JSON.parse(e.data);
      console.log("client", payload);
    };

    const openEvenListener = (e) => {
      console.log("open", e);
    };

    const errorEvenListener = (e) => {
      console.log("error", e);
    };

    eventSource.onmessage = (e) => {
      console.log("onmessag", e.data);
    };

    eventSource.addEventListener("session1", eventMessageListener);
    eventSource.addEventListener("open", openEvenListener);
    eventSource.addEventListener("error", errorEvenListener);

    return () => {
      eventSource.close();
      eventSource.removeEventListener("session1", eventMessageListener);
      eventSource.removeEventListener("open", openEvenListener);
      eventSource.removeEventListener("error", errorEvenListener);
    };
  }, []);

  return null;
}
