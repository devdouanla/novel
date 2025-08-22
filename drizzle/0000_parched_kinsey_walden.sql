CREATE TYPE "public"."status" AS ENUM('ongoing', 'finished');--> statement-breakpoint
CREATE TABLE "book" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" varchar(255),
	"title" varchar(125) NOT NULL,
	"statut" "status" DEFAULT 'ongoing',
	"description" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chapitre" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(125) NOT NULL,
	"text" text,
	"book_id" integer,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "chapitre" ADD CONSTRAINT "chapitre_book_id_book_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."book"("id") ON DELETE cascade ON UPDATE no action;