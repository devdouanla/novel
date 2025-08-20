// components/NovelCard.tsx
import Image from 'next/image';

export default function NovelCard() {
  return (
     
   <div className="w-35 h-70 sm:w-50 sm:h-80 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900">
     <div className="relative overflow-hidden rounded-t-lg">
       <Image
         src="/novels/first.png"
         alt="Your Highness the Regent"
         width={240}
         height={300}
         className="rounded-t-lg transform transition-transform duration-300 hover:scale-105"
       />
       <span className="absolute top-2 right-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
         OnGoing
       </span>
     </div>
     <div className="p-3">
       <h3 className="text-sm whitespace-normal break-words font-medium text-gray-900 dark:text-gray-100 truncate">
         Your Highness the Regent, Your...
       </h3>
     </div>
   </div> 
  );
}
