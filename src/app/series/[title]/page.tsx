"use client"
import React,{useState,useEffect} from 'react'
import Header from '@/app/series/_components/header';
import Table from '@/app/series/_components/table';
import { use } from 'react'
import { useBook } from '@/contexts/useBookContext';
import { useChapitre } from '@/contexts/useChapitreContext';
import { chapitre } from '@/db/schemas';
type Chapitre = typeof chapitre.$inferInsert;

export default function TITLE({
  params,
}: {
  params: Promise<{ title: string}>
}) {
    const {title}= use(params)
    const { books } = useBook();
    const titlee = decodeURIComponent(title);
        const book = books.find((book) => book.title === titlee);
  const [chapitresFiltres, setChapitresFiltres] = useState<Chapitre[]>([]);
  const { allBookChapitres } = useChapitre();


  useEffect(() => {
    const fetchChapitres = async () => {
      if (book?.id) {
        const result = await allBookChapitres(book.id);
        if (result) setChapitresFiltres(result);
      }
    };

    fetchChapitres();
  }, [book, allBookChapitres]);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-6 lg:py-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <Header
            title={book?.title ?? "dfdsfsf"}
            image={book?.image}
            statut={book?.statut}
            nbChapitres={chapitresFiltres.length}
          />
        </div>
        
        {/* Table Section */}
        <div className="w-full">
          <Table book={book} />
        </div>

      
      </div>
    </div>
  )
}

  