"use server";
import EventEmitter from "events";

export const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const stream = new EventEmitter();

stream.on("event1", async () => {
  await sleep(2000);

  emitEvent("event2", {
    id: "123",
  });
});

async function emitEvent(eventType: string, data: Record<string, any> | null) {
  const body = {
    sessionId: "session1",
    event: eventType,
    data,
  };
  const request = await fetch(`${process.env.NEXT_PUBLIC_SSE_URL}/sse`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return request.json();
}

export async function addToCart(prevState: any, _: FormData) {
  //This console.log printed twice by clicking `Add to cart` button

  await sleep(2000);
  stream.emit("event1");

  return {
    error: null,
    success: true,
  };
}
