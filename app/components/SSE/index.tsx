"use client";

import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

// export const runtime = "edge"; // 'nodejs' (default) | 'edge'

export default function SSE() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // React.useEffect(() => {
  //   const pusher = new Pusher("2bc7d2510c58ce4f5253", {
  //     cluster: "mt1",
  //   });
  //   pusher.connection.bind("error", function (err) {
  //     if (err.error.data.code === 4004) {
  //       console.log("Over limit!");
  //     }
  //   });
  //   const channel = pusher.subscribe("my-channel");
  //   channel.bind("my-event", function (data) {
  //     console.log(data.message);
  //   });
  //
  //   return () => {
  //     channel.unsubscribe();
  //   };
  // }, []);

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

  return <div />;
}
