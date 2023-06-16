"use client";

export default function Home() {
  function startSocket() {
    new WebSocket("ws://localhost:3000/websocket");
  }

  return (
    <div className="p-10 max-w-md">
      <h1>Test WS bug</h1>
      <p>
        Clicking the button will start a web socket connection on a rewritten
        path, causing the server exception.
      </p>
      <button className="bg-red-600 px-5 m-5" onClick={startSocket}>
        Click
      </button>
    </div>
  );
}
