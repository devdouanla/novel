"use client"
import React from "react";
import Link from "next/link";

const chapters = [
  { id: 1, title: "A Tragedy Triggered by a Lie" },
  { id: 2, title: "She Seemed Like She Wanted to Devour Me" },
  { id: 3, title: "Idiot" },
  { id: 4, title: "For Little Bao" },
  { id: 5, title: "Mantou" },
  { id: 6, title: "Mantou" },
  { id: 7, title: "Mantou" },
  { id: 8, title: "Mantou" },
];

export default function ChapterList() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          All {chapters.length} Chapters
        </h2>
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
          Browse through all available chapters of this series
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {chapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/chapters/${ch.id}`}
            className="group flex items-start gap-3 p-3 lg:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200 hover:shadow-md"
          >
            <span className="flex-shrink-0 px-3 py-1.5 text-xs lg:text-sm font-bold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              Ch.{ch.id}
            </span>
            <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium leading-relaxed">
              {ch.title}
            </span>
          </Link>
        ))}
      </div>
      
      {chapters.length > 8 && (
        <div className="mt-6 text-center">
          <button className="px-6 py-3 text-sm lg:text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 border border-blue-300 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200">
            Load More Chapters
          </button>
        </div>
      )}
    </div>
  );
}
