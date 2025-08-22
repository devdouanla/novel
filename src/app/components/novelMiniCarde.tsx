import Image from 'next/image';
import {BookTitle} from "@/components/bookTitle"; 
import Link from 'next/link';
import { Text } from 'rizzui';


interface NovelCardProps {
  title: string;
  image?: string | null; // 👈 accepte string, undefined et null
  statut?: "ongoing" | "finished" | "planned" | null;
  updatedAt?: Date | null;
  description?: string | null;
}
export default function NovelMiniCarde({ title, image, statut, description }: NovelCardProps) {
   // ✅ On calcule "il y a X temps" si la date existe
  
  return (
    <Link href={`/series/${title}`}>
   <div className="flex items-start space-x-3 p-3 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-900 h-full">
      <Image
       src={image?? "/placeholder.jpg"}
        alt=""
        width={90}
        height={90}
        className="rounded-md object-cover"
      />

      <div className="flex flex-col">
         <BookTitle description={title} />

        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-0.5 rounded w-fit mb-1">
          {statut}
        </span>
 <Text className="text-lg text-gray-500 dark:text-gray-400 line-clamp-3">
  {description}
</Text>



       
      </div>

     
    </div>
    </Link>

  );
}
