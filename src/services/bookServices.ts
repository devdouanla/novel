// Connexion à la base de données configurée avec Drizzle
import { db } from '@/app/index';
// Import du schema de la  users 
import {book} from '@/db/schemas' 

// import d'un utilitaire de Drizzle pour les filtres
import { eq,desc} from 'drizzle-orm'
type Book = typeof book.$inferInsert



 export class BookServices{

  // 🔽 READ ALL
  static async getAll(): Promise<Book[]> {
    return await db.select().from(book);
  }

static async lastUpdated(): Promise<Book[]> {
  return await db
    .select()
    .from(book)
    .orderBy(desc(book.updatedAt))
    .limit(15);
}

static async add(title:string, description:string):Promise<void>{
await db.insert(book).values({ title, description });

}
 static async delete(id: number): Promise<void> {
    await db.delete(book).where(eq(book.id, id));
  } 

static async update(id: number, data: Partial<Omit<Book, 'id' >>){
    await db.update(book).set({ ...data }).where(eq(book.id, id))

  }
 }