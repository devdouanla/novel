import   NovelMiniCarde from '@/app/components/novelMiniCarde'
import { book } from '@/db/schemas';
type Book = typeof book.$inferInsert
interface GridContainProps {
  title: string;
  books: Book[];
}
export default function GridContainSeries({ title, books }: GridContainProps) {
  return (
<div className="p-4">
  <div className='flex justify-between items-center mb-4'>
<h3 className="text-xl font-semibold mb-4 md:text-left ">{title}</h3>

  
  
  </div>
  

  <div className="grid grid-auto-flow:row grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-2 justify-center">
    {books.map((book) => (
      <NovelMiniCarde key={book.id} {...book} />
    ))}
  </div>
</div>
  )
}
