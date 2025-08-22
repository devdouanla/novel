import { BookServices } from "@/services/bookServices";
import { NextResponse } from "next/server";

export async function GET() {
  const books = await BookServices.lastUpdated();
  return new NextResponse(JSON.stringify(books), { status: 200 });
}
