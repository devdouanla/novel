"use client"; 

import { Tab } from "rizzui";
import ChapterList from "@/app/series/_components/chapterList";
import { book } from "@/db/schemas";
type Book = typeof book.$inferInsert;



interface BookFormProps {
  book?: Book;
  
}

export default function Table({ book }: BookFormProps) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mt-6">
      <Tab className="w-full">
        <Tab.List className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <Tab.ListItem className="flex-1 px-4 py-3 text-center text-sm lg:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20">
            Description
          </Tab.ListItem>
          <Tab.ListItem className="flex-1 px-4 py-3 text-center text-sm lg:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20">
            Chapter
          </Tab.ListItem>
        </Tab.List>
        
        <Tab.Panels className="p-4 lg:p-6">
          <Tab.Panel className="space-y-4">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {book?.description}
              </p>
            </div>
          </Tab.Panel>
          
          <Tab.Panel className="space-y-4">
            <ChapterList book={book} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab>
    </div>
  );
}