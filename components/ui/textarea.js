"use client";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent ${className}`}
    />
  );
}
