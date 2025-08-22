import NovelCard from '@/app/components/card';
import { book } from '@/db/schemas';
type Book = typeof book.$inferInsert



interface GridContainProps {
  title: string;
  books: Book[];
}

export default function GridContain({ title, books }: GridContainProps) {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4 md:text-left">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-4 place-items-center justify-center">
        {books.map((book) => (
          <NovelCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}
