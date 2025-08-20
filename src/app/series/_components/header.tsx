"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "rizzui";

function Header() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
        {/* Image Container */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start">
          <Image
            src="/novels/first.png"
            alt="Your Highness the Regent"
            width={240}
            height={300}
            className="rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-xl"
          />
        </div>
        
        {/* Content Container */}
        <div className="flex-1 space-y-4 lg:space-y-6">
          {/* Title and Status */}
          <div className="space-y-3">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Your Highness the Regent
            </h1>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              A captivating tale of love and power.
            </p>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs lg:text-sm font-semibold px-3 py-1.5 rounded-full">
              OnGoing
            </span>
          </div>
          
          {/* Last Chapter Link */}
          <div className="pt-2">
            <Link 
              href="#" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm lg:text-base font-medium transition-colors duration-200 underline decoration-2 underline-offset-4"
            >
              Last Chapter
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-6 py-2.5 text-sm lg:text-base font-medium border-2 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              BOOKMARK
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto px-8 py-2.5 text-sm   dark:text-white lg:text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              READ
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
