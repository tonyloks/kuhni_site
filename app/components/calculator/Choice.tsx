import React from "react";

export default function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-xl border px-3 py-2 text-sm font-medium transition",
        active ? "border-red-600 bg-red-50 text-red-700" : "border-gray-300 hover:border-red-300 hover:text-red-700",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
