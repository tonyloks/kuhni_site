import React from "react";

export default function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-3xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}
