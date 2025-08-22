// Connexion à la base de données configurée avec Drizzle
import { db } from '@/app/index';
// Import du schema de la  users 
import {chapitre} from '@/db/schemas' 

// import d'un utilitaire de Drizzle pour les filtres
import { eq} from 'drizzle-orm'
type Chapitre = typeof chapitre.$inferInsert



 export class ChapitreServices{

  // 🔽 READ ALL
  static async getAll(): Promise<Chapitre[]> {
    return await db.select().from(chapitre);
  }

static async add(title:string, text:string, bookId:number):Promise<void>{
await db.insert(chapitre).values({ title, text, bookId });

}


static async getByBook(bookId: number) {
    return await db
      .select()
      .from(chapitre)
      .where(eq(chapitre.bookId, bookId));
  }
 static async delete(id: number): Promise<void> {
    await db.delete(chapitre).where(eq(chapitre.id, id));
  } 

static async update(id: number, data: Partial<Omit<Chapitre, 'id' >>){
    await db.update(chapitre).set({ ...data }).where(eq(chapitre.id, id))

  }

static async getById(id:number): Promise<Chapitre | undefined> {
    const [chapitre1] = await db.select().from(chapitre).where(eq(chapitre.id, id));
    return chapitre1;
  } }