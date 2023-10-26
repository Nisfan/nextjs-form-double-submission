// import EventSource from "eventsource";

// should be declared (!)
export const dynamic = "force-dynamic";
export const runtime = "edge"; // 'nodejs' (default) | 'edge'

export async function GET() {
  console.log("SSE.api");
  // let responseStream = new TransformStream();
  // const writer = responseStream.writable.getWriter();
  // const encoder = new TextEncoder();
  //
  // const resp = new EventSource(`${process.env.NEXT_PUBLIC_SSE_URL}/sse`);
  // resp.onmessage = async (e) => {
  //   console.log("receved event", e);
  //   await writer.write(encoder.encode(`event: message\ndata: ${e.data}\n\n`));
  // };
  //
  // resp.onerror = async () => {
  //   console.log("closing connection");
  //   resp.close();
  //   await writer.close();
  // };

  // return new Response(responseStream.readable, {
  //   headers: {
  //     "Content-Type": "text/event-stream",
  //     "Cache-Control": "no-cache, no-transform",
  //     Connection: "keep-alive",
  //   },
  // });
  //
  return new Response();
}
