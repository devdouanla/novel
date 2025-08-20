"use client";
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useTheme } from '@/app/hooks/useTheme';

export default function CloudinaryTest() {
  const { isDark } = useTheme();

  const testImages = [
    {
      id: 1,
      src: "dzcu28kkx:chapter1",
      alt: "Test Image 1",
      description: "Image de test depuis Cloudinary"
    },
    {
      id: 2,
      src: "dzcu28kkx:chapter1",
      alt: "Test Image 2", 
      description: "Image de test avec chemin complet"
    }
  ];

  return (
    <div className={`p-6 rounded-lg border transition-colors duration-300 ${
      isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'
    }`}>
      <h2 className={`text-xl font-bold mb-4 text-center transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Test Cloudinary
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testImages.map((image) => (
          <div key={image.id} className="text-center">
            <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              {image.description}
            </h3>
            
            <div className="mb-3">
              <CldImage
                src={image.src}
                alt={image.alt}
                width={250}
                height={200}
                className="rounded-lg shadow-md mx-auto"
                crop="fill"
                gravity="auto"
                quality="auto"
                format="auto"
              />
            </div>
            
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <strong>Source:</strong> {image.src}
            </p>
          </div>
        ))}
      </div>
      
      {/* Informations de configuration */}
      <div className={`mt-6 p-4 rounded-lg border transition-colors duration-300 ${
        isDark ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
      }`}>
        <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Configuration Cloudinary
        </h3>
        
        <div className={`text-sm space-y-2 transition-colors duration-300 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          <p><strong>Cloud Name:</strong> dzcu28kkx</p>
          <p><strong>Images de test:</strong> chapter1</p>
          <p><strong>Format:</strong> Auto-détection</p>
          <p><strong>Qualité:</strong> Auto-optimisation</p>
          <p><strong>Recadrage:</strong> Fill avec gravity auto</p>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-blue-200' : 'text-blue-700'
          }`}>
            <strong>Note:</strong> Configuration Cloudinary corrigée avec le bon cloud name et des images valides.
          </p>
        </div>
      </div>
    </div>
  );
} 