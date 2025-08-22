ALTER TABLE "book" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "book" ADD CONSTRAINT "book_title_unique" UNIQUE("title");--> statement-breakpoint
ALTER TABLE "chapitre" ADD CONSTRAINT "chapitre_title_unique" UNIQUE("title");