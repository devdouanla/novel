// app/api/chapitre/[id]/route.ts
import { ChapitreServices } from "@/services/chapitreServices";
import { NextResponse,NextRequest } from "next/server";


export async function PUT(
    request: NextRequest,
  context: {params: Promise<{ id: string }> }
) {

  try {
    // parser l'id string en nombre
  const { id } =  await context.params
    if (isNaN(parseInt(id))) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    const data = await request.json();

  await ChapitreServices.update(parseInt(id), data);

   return NextResponse.json({ message: "Chapitre modifié" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}



export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const ide = parseInt(id, 10);
    const chapitre = await ChapitreServices.getById(ide);

    if (!chapitre) {
      return NextResponse.json({ error: "Chapitre non trouvé" }, { status: 404 });
    }

    return NextResponse.json(chapitre);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}












































































