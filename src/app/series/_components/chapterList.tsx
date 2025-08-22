"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { book, chapitre } from "@/db/schemas";
import { useChapitre } from "@/contexts/useChapitreContext";

type Book = typeof book.$inferInsert;
type Chapitre = typeof chapitre.$inferInsert;

interface BookFormProps {
  book?: Book;
}

export default function ChapterList({ book }: BookFormProps) {
  const { allBookChapitres } = useChapitre();
  const [chapitresFiltres, setChapitresFiltres] = useState<Chapitre[]>([]);
  const [visibleCount, setVisibleCount] = useState(6); // ✅ toujours déclaré en haut

  useEffect(() => {
    const fetchChapitres = async () => {
      if (book?.id) {
        const result = await allBookChapitres(book.id);
        if (result) setChapitresFiltres(result);
      }
    };

    fetchChapitres();
  }, [book, allBookChapitres]);

  // ✅ gérer le "load more"
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // ✅ affichage conditionnel APRÈS les hooks
  if (!chapitresFiltres || chapitresFiltres.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        No chapters available for this series.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 text-center lg:text-left">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          All {chapitresFiltres.length} Chapters of {book?.id}
        </h2>
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
          Browse through all available chapters of this series
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {chapitresFiltres.slice(0, visibleCount).map((ch) => (
          <Link
            key={ch.id}
            href={`/series/${book?.title}/chapitre/${ch.id}`}
            className="group flex items-start gap-3 p-3 lg:p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200 hover:shadow-md"
          >
            <span className="flex-shrink-0 px-3 py-1.5 text-xs lg:text-sm font-bold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              Ch.{ch.chapterNumber}
            </span>
            <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-medium leading-relaxed">
              {ch.title} {ch.bookId}
            </span>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < chapitresFiltres.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 text-sm lg:text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 border border-blue-300 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-200"
          >
            Load More Chapters
          </button>
        </div>
      )}
    </div>
  );
}
