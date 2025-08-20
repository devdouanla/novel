"use client"
import React from 'react'
import { useTheme } from '@/app/hooks/useTheme'

function TitleChapter() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header avec titre de la série */}
        <div className="mb-8 text-center">
          <h1 className={`text-lg text-gray-600 font-medium transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            After Transmigrating into a Book, I Accidentally Won the Heart of the Miaojiang Youth
          </h1>
        </div>
        
        {/* Contenu du chapitre */}
        <div className="prose prose-lg max-w-none">
          {/* Titre du chapitre */}
          <h2 className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Chapter 1
          </h2>
          
          {/* Paragraphes du chapitre */}
          <div className={`space-y-6 leading-relaxed text-base transition-colors duration-300 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>
            <p className="text-lg">
              &ldquo;It&rsquo;s rare to come across such high-quality &lsquo;insect feed.&rsquo; Let&rsquo;s see which of you poison-bred warriors can claim her as the mother vessel.&rdquo;
            </p>
            
            <p>
              A heavy thud echoed through the dimly lit basement, followed by the metallic clang of an iron door shutting, cutting off the last sliver of light.
            </p>
            
            <p>
              The burlap sack shifted, and a girl wriggled her way out, peering around with wide eyes.
            </p>
            
            <p>
              The basement was damp, the air thick with the nauseating stench of blood that refused to fade.
            </p>
            
            <p>
              Chu&rsquo;he&rsquo;s face fell instantly.
            </p>
            
            <p>
              [System, I have a feeling... the task you gave me is impossible.]
            </p>
            
            <p>
              [Host, if you put in the effort, there&rsquo;s still a decent chance of success.]
            </p>
            
            <p>
              [How decent?]
            </p>
            
            <p>
              The genderless mechanical voice replied: [Based on calculations, approximately a 0.03% probability.]
            </p>
          </div>
        </div>
        
        {/* Navigation entre chapitres */}
        <div className={`mt-12 pt-8 border-t flex justify-between items-center transition-colors duration-300 ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <button className={`px-6 py-3 text-sm font-medium border rounded-lg transition-all duration-200 hover:scale-105 ${
            isDark 
              ? 'text-gray-300 border-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-500' 
              : 'text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50'
          }`}>
            ← Previous Chapter
          </button>
          
          <div className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Chapter 1 of 156
          </div>
          
          <button className={`px-6 py-3 text-sm font-medium border rounded-lg transition-all duration-200 hover:scale-105 ${
            isDark 
              ? 'text-gray-300 border-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-500' 
              : 'text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50'
          }`}>
            Next Chapter →
          </button>
        </div>
      </div>
    </div>
  )
}

export default TitleChapter
