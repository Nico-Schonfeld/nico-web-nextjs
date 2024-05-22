"use client";

import React from "react";
import { redirect, usePathname } from "next/navigation";

const NotFoundPage = () => {
  const path = usePathname();

  return (
    <section>
      Not Found Page
      <button
        onClick={() => {
          if (typeof window !== "undefined") location.replace("/");
        }}
        className="p-2 border rounded-md"
      >
        Back
      </button>
    </section>
  );
};

export default NotFoundPage;
