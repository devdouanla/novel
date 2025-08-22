// app/api/projets/[id]/route.ts
import { BookServices } from "@/services/bookServices";
import { NextResponse,NextRequest } from "next/server";


export async function PUT(
    request: NextRequest,
  context: {params: Promise<{ id: number }> }
) {

  try {
    // parser l'id string en nombre
  const { id } =  await context.params
    if (isNaN(id)) {
      return NextResponse.json({ error: "ID invalide" }, { status: 400 });
    }
    const data = await request.json();

  await BookServices.update(id, data);

   return NextResponse.json({ message: "Livre modifié" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}














































export async function DELETE(
  request: NextRequest,
  context:{params: Promise<{ id: number }> }
) {
  try {
const { id } =  await context.params    
await BookServices.delete(id);
    return NextResponse.json({ message: "Livre supprimé" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}