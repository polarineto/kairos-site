"use client";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border rounded-xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`text-gray-800 ${className}`}>
      {children}
    </div>
  );
}
