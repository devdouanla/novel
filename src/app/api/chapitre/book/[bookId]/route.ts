// src/app/api/chapitre/[bookId]/route.ts
import { NextResponse,NextRequest } from "next/server";
import { ChapitreServices } from "@/services/chapitreServices";

export async function GET(
    request: NextRequest,
  
  context: { params: Promise<{ bookId: string }> }) {
  try {
    const { bookId } = await context.params;
    const ide = parseInt(bookId, 10);
    const chapitres = await ChapitreServices.getByBook(ide);
    return NextResponse.json(chapitres);
  } catch (error) {
     console.error("Erreur lors de la récupération du chapitre :", error);
    return NextResponse.json({ error: "Erreur lors de la récupération" }, { status: 500 });
  }
}
