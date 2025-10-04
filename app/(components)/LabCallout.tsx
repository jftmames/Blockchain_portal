'use client';
import * as React from 'react';
export function LabCallout({ title, href, children }: { title: string; href: string; children?: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block border rounded-xl p-4 no-underline hover:bg-gray-50 transition-colors my-4 shadow-sm border-blue-200">
      <div className="text-sm text-blue-600 font-mono flex items-center gap-2">
        <span>Laboratorio guiado</span>
      </div>
      <div className="font-semibold text-lg mt-1">{title}</div>
      {children && <p className="text-gray-700 text-sm mt-1">{children}</p>}
    </a>
  );
}
