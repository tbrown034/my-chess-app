"use client";
import React, { useState } from "react";
import Board from "./puzzle/Board.jsx";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-14 bg-zinc-400">
      <div className="text-3xl text-blue-500">My Chess App</div>
      <Board />
    </main>
  );
}
