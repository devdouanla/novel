"use client";
import React from 'react';
import { useTheme } from '@/app/hooks/useTheme';
import GridContainSerie from '@/app/components/gridContainSerie'
import { useBook } from '@/contexts/useBookContext';


export default function SeriesPage() {
  const { isDark } = useTheme();
  const { books } = useBook();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <GridContainSerie title="All Series" books={books} />
      

      
    </div>
  );
}


