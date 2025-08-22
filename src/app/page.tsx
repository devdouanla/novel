"use client";

import * as React from 'react';
import GridContain from '@/app/components/gridContain'
import GridContain1 from '@/app/components/gridContain1'
import { useBook } from '@/contexts/useBookContext';

export default function Home() {
  const { books, latestUpdatedBooks } = useBook();

  // on trie du plus récent au plus ancien
  const latestBooks = [...books]
  .sort((a, b) =>
    new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
  )
  .slice(0, 6);

const completedBooks = books
  .filter((b) => b.statut === "finished")   // ⬅️ on garde que les terminés
  .sort((a, b) => 
    new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime()
  )
  .slice(0, 6);



  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <GridContain title='New Series' books={latestBooks} />
      <GridContain title='Completed Series' books={completedBooks} />
      {/* <GridContain /> */}
      <GridContain1 title='Latest Updated ' books={latestUpdatedBooks} />
    </div>
  )
}

