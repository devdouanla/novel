import { pgTable,varchar, text, serial,timestamp, integer,pgEnum } from "drizzle-orm/pg-core";
export const status = pgEnum('status',['ongoing','finished'])

// Table Book
export const book = pgTable("book", {
  id: serial("id").primaryKey(), // auto-incrément
  image: varchar({ length: 255 }),
  title: varchar( { length: 125 }).notNull().unique(),
  statut: status().default("ongoing"), // équivalent de VARBINARY
  description: text("description"),
  createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
});

// Table Chapitre
export const chapitre = pgTable("chapitre", {
  id: serial("id").primaryKey(),
  title: varchar({ length: 125 }).notNull().unique(),
  chapterNumber: integer("chapter_number").notNull().default(1),
  text: text("text"),
  bookId: integer("book_id").references(() => book.id, { onDelete: 'cascade' }),
createdAt: timestamp('created_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 updatedAt: timestamp('updated_at').$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
 
});

























