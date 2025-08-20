"use client";
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/app/hooks/useTheme';

// Données des séries avec images Cloudinary
const seriesData = [
  {
    id: 1,
    title: "After Transmigrating into a Book, I Accidentally Won the Heart of the Miaojiang Youth",
    cover: "https://res.cloudinary.com/dzcu28kkx/image/upload/v1755641748/chapter1.png",
    status: "OnGoing",
    chapters: 156,
    genre: "Fantasy",
    description: "A captivating tale of love and power in a mystical world."
  },
  {
    id: 2,
    title: "The Dragon's Heart",
    cover: "https://res.cloudinary.com/dzcu28kkx/image/upload/v1755641748/chapter1.png",
    status: "Completed",
    chapters: 89,
    genre: "Adventure",
    description: "An epic journey through ancient lands filled with dragons and magic."
  },
  {
    id: 3,
    title: "Eternal Night",
    cover: "https://res.cloudinary.com/dzcu28kkx/image/upload/v1755641748/chapter1.png",
    status: "OnGoing",
    chapters: 234,
    genre: "Mystery",
    description: "A dark tale of secrets and supernatural forces."
  }
];

export default function SeriesPage() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header de la page */}
        <div className="mb-8 text-center">
          <h1 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Découvrez nos Séries
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explorez notre collection de romans et découvrez de nouvelles histoires passionnantes
          </p>
        </div>

        {/* Grille des séries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {seriesData.map((series) => (
            <div 
              key={series.id} 
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Image de couverture */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={series.cover}
                  alt={series.title}
                  fill
                  className="object-cover"
                />
                {/* Badge de statut */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    series.status === 'OnGoing' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {series.status}
                  </span>
                </div>
              </div>

              {/* Contenu de la série */}
              <div className="p-4 lg:p-6">
                <h3 className={`text-lg font-bold mb-2 line-clamp-2 transition-colors duration-200 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {series.title}
                </h3>
                
                <p className={`text-sm mb-3 line-clamp-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {series.description}
                </p>

                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {series.genre}
                  </span>
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {series.chapters} chapitres
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton pour ajouter plus de séries */}
        <div className="mt-12 text-center">
          <button className={`px-8 py-3 text-lg font-medium rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
            isDark 
              ? 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900' 
              : 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
          }`}>
            Voir Plus de Séries
          </button>
        </div>
      </div>
    </div>
  );
}


