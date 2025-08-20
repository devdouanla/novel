"use client";

import * as React from 'react';
import GridContain from '@/app/components/gridContain'
import GridContain1 from '@/app/components/gridContain1'

export default function Home() {
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <GridContain />
      <GridContain />
      <GridContain1 />
    </div>
  )
}