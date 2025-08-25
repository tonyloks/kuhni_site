import React from "react";

export default function LengthInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="number"
        step="0.1"
        min={0}
        inputMode="decimal"
        className="w-full rounded-xl border border-gray-300 px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="например, 2.5"
      />
    </div>
  );
}
