import React from "react";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  return (
    <div
      className="h-[400px] flex flex-col items-center justify-center bg-gray-50
    text-gray-900"
    >
      <p>HOME PAGE </p>
      <button
        onClick={() => {
          router.push("/hl");
        }}
      >
        goto HIGHLIGHT
      </button>
    </div>
  );
}
