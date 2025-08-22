"use client"
import { createContext, useContext, useState, ReactNode,useEffect,useCallback } from 'react';
import { book } from '@/db/schemas';
type Book = typeof book.$inferInsert

const BookContext = createContext<{
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (id: number) => void;
  latestUpdatedBooks: Book[];
}>({
  books: [],
  addBook: () => {},
  removeBook: () => {},
  latestUpdatedBooks: [],
});

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [latestUpdatedBooks, setLatestUpdatedBooks] = useState<Book[]>([]);

  const addBook = useCallback((newBook: Book) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  }, []);

  const removeBook = useCallback((id: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }, []);
 const allBooks = async () => {
    try {
      const response = await fetch("/api/book", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status} : ${response.statusText}`);
      }

      const data: Book[] = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des livres :", error);
      return null;
    }
  };

const fetchLatestBooks = async () => {
    try {
      const response = await fetch("/api/book/latest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status} : ${response.statusText}`);
      }

      const data: Book[] = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des livres :", error);
      return null;
    }
  };



 useEffect(() => {
      const fetchProjets = async () => {
        const result = await fetchLatestBooks(); // Appel API ou DB
  
        if (result) {
          
  
         
         
  
          // Étape 3 : Mettre à jour l'état
         setLatestUpdatedBooks(result);
          console.log("Livres récupérés :", result);
        }
      };
  
      fetchProjets();
    }, []);



 useEffect(() => {
      const fetchProjets = async () => {
        const result = await allBooks(); // Appel API ou DB
  
        if (result) {
          
  
         
         
  
          // Étape 3 : Mettre à jour l'état
          setBooks(result);
          console.log("Livres récupérés :", result);
        }
      };
  
      fetchProjets();
    }, [ setBooks]); // Ajoute tasks dans les dépendances si elles changent // ajouter addProjet et updateProjet si nécessaire

















const valeur = {
   books, addBook, removeBook , latestUpdatedBooks
}












  return (
    <BookContext.Provider value={valeur}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook doit être utilisé dans un <BookProvider>");
  }
  return context;
};
