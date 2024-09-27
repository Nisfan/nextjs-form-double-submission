"use server";
import EventEmitter from "events";
import Pusher from "pusher";

export const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const stream = new EventEmitter();

const pusher = new Pusher({
  appId: "1695219",
  key: "2bc7d2510c58ce4f5253",
  secret: "f46c40bf045cf9a303ed",
  cluster: "mt1",
  useTLS: true,
});

stream.on("event1", async () => {
  await sleep(2000);

  // await pusher.trigger("my-channel", "my-event", {
  //   message: "hello world",
  // });
  await emitEvent("event2", {
    id: "123",
  });
});

async function emitEvent(eventType: string, data: Record<string, any> | null) {
  const body = {
    sessionId: "session1",
    event: eventType,
    data,
  };

  console.log("emitEvent.body", body);
  const url = `${process.env.NEXT_PUBLIC_SSE_URL}/sse`;
  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log("emitEvent.request", request);

  // await request.json();
}

export async function addToCart(prevState: any, _: FormData) {
  //This console.log printed twice by clicking `Add to cart` button

  stream.emit("event1");
  // stream.once("event1", async () => {
  //   await emitEvent("event2", {
  //     id: "123",
  //   });
  // });

  return {
    error: null,
    success: true,
  };
}
