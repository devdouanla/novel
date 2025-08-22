import { BookServices } from "@/services/bookServices";
import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
    

//     // Vérifie la présence de description
//     const data = await req.json();
//     const {description}  = data

//     if (!description) {
//       return NextResponse.json({ error: "Description requise" }, { status: 400 });
//     }

//     // Appelle le service
//     await BookServices.add(description);

//     return NextResponse.json({ message: "Projet ajouté" });
//   } catch (error) {
//     console.error("Erreur interne :", error);
//     return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
//   }
// }




export async function GET() {
  const books = await BookServices.getAll();
  return new NextResponse(JSON.stringify(books), { status: 200 });
}


