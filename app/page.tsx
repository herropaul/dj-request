"use client";

import QrCode from "../components/QrCode";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Users Homepage</h1>
      <label>Enter song: </label>
      <input className=" border-black" type="text" id="song"></input>
      <QrCode />
    </div>
  );
}
