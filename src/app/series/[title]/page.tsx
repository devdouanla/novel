import React from 'react'
import Header from '@/app/series/_components/header';
import Table from '../_components/table';

export default function TITLE() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-6 lg:py-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <Header />
        </div>
        
        {/* Table Section */}
        <div className="w-full">
          <Table />
        </div>
      </div>
    </div>
  )
}

  