'use client';
import { useEffect, useState } from 'react';
import * as React from 'react';

export function Progreso({ slug }: { slug: string }) {
  const key = `prog:${slug}`;
  const [done, setDone] = useState(false);
  
  useEffect(() => { 
    // Asegura que el código se ejecute solo en el cliente
    if (typeof window !== 'undefined') {
        setDone(localStorage.getItem(key) === '1'); 
    }
  }, [key]);

  const toggleStatus = () => {
    if (typeof window !== 'undefined') {
        const v = done ? '0' : '1'; 
        localStorage.setItem(key, v); 
        setDone(!done);
    }
  };

  return (
    <button
      onClick={toggleStatus}
      className={`text-sm border rounded px-3 py-1 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        done 
          ? 'bg-green-100 border-green-300 text-green-700 hover:bg-green-200 focus:ring-green-500' 
          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400'
      }`}
    >
      {done ? 'Completada ✅' : 'Marcar como completada'}
    </button>
  );
}
