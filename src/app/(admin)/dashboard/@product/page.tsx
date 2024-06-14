"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("idle");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=12345678",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("revalidate success");
      }
    }
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <p>{status}</p>
      <button
        className="bg-black text-white p-3 m-5"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
