import   NovelMiniCard from '@/app/components/novelMiniCard'
import { book } from '@/db/schemas';
import Link from 'next/link';
type Book = typeof book.$inferInsert
interface GridContainProps {
  title: string;
  books: Book[];
}
export default function GridContain1({ title, books }: GridContainProps) {
  return (
<div className="p-4">
  <div className='flex justify-between items-center mb-4'>
<h3 className="text-xl font-semibold mb-4 md:text-left ">{title}</h3>

  
  <Link href="/series">
    <h3 className="text-blue-500 hover:underline">View All</h3>
  </Link>
  </div>
  

  <div className="grid grid-auto-flow:row grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-2 justify-center">
    {books.map((book) => (
      <NovelMiniCard key={book.id} {...book} />
    ))}
  </div>
</div>






  );
}
