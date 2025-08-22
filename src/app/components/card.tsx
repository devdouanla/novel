// components/NovelCard.tsx
import Image from "next/image";
import {BookTitle} from "@/components/bookTitle"; 
import Link from 'next/link';

interface NovelCardProps {
  title: string;
  image?: string | null; // 👈 accepte string, undefined et null
  statut?: "ongoing" | "finished" | "planned" | null;
  description?: string | null;
}

export default function NovelCard({ title, image, statut }: NovelCardProps) {
  return (
     
    <div className="w-36 h-72 sm:w-48 sm:h-80 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900">
      <Link href={`/series/${title}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={image?? "/placeholder.jpg"}
          alt={title}
          width={240}
          height={300}
          className="rounded-t-lg transform transition-transform duration-300 hover:scale-105"
        />
        {statut && (
          <span className="absolute top-2 right-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
            {statut}
          </span>
        )}
      </div>
        </Link>
      <BookTitle description={title} />
    </div>
  
    );
    }

  

