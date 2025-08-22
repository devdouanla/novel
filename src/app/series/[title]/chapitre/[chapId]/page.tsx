"use client"
import React, { useEffect, useState } from "react"
import { useTheme } from "@/app/hooks/useTheme"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Text } from "rizzui"
import { use } from "react"
import { useChapitre } from "@/contexts/useChapitreContext"
import Link from "next/link"
import { chapitre } from "@/db/schemas"
type Chapitre = typeof chapitre.$inferInsert

function TitleChapter({
  params,
}: {
  params: Promise<{ title: string; chapId: number }>
}) {
  const { isDark } = useTheme()
  const { title, chapId } = use(params)
  const titlee = decodeURIComponent(title)
  const { getChapitreById, allBookChapitres } = useChapitre()
  const [chapitre, setChapitre] = useState<Chapitre | null>(null)
  const [chapitresFiltres, setChapitresFiltres] = useState<Chapitre[]>([])

  useEffect(() => {
    const fetchChapitre = async () => {
      const chapitre = await getChapitreById(chapId)
      setChapitre(chapitre)
    }
    fetchChapitre()
  }, [chapId, getChapitreById])

  useEffect(() => {
    const fetchChapitres = async () => {
      if (chapitre) {
        const result = await allBookChapitres(chapitre.bookId ?? 0)
        if (result) {
          // trier par numéro de chapitre pour avoir l'ordre correct
          const sorted = result.sort((a, b) => (a.chapterNumber ?? 0) - (b.chapterNumber ?? 0))
          setChapitresFiltres(sorted)
        }
      }
    }
    fetchChapitres()
  }, [chapitre, allBookChapitres])

  // Trouver index du chapitre courant dans la liste
  const currentIndex = chapitresFiltres.findIndex((c) => c.id === chapitre?.id)
  const prevChapitre = currentIndex > 0 ? chapitresFiltres[currentIndex - 1] : null
  const nextChapitre =
    currentIndex >= 0 && currentIndex < chapitresFiltres.length - 1
      ? chapitresFiltres[currentIndex + 1]
      : null

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header avec titre de la série */}
        <Link href={`/series/${title}`}>
          <div className="mb-8 text-center">
            <h1
              className={`text-lg text-gray-600 font-medium transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <ArrowLeft className="inline-block mr-2" /> {titlee}
            </h1>
          </div>
        </Link>

        {/* Contenu du chapitre */}
        <div className="prose prose-lg max-w-none">
          <h2
            className={`text-3xl font-bold mb-8 text-center transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Chapter {chapitre?.chapterNumber}: {chapitre?.title || "Untitled Chapter"}
          </h2>

          <div
            className={`space-y-6 leading-relaxed text-base transition-colors duration-300 select-none ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
<Text
  className="
    prose prose-lg 
    max-w-3xl 
    mx-auto 
    text-justify 
    leading-relaxed 
    text-gray-800 
    dark:text-gray-200 
    whitespace-pre-line
  "
>
  {chapitre?.text || "This chapter is currently empty."}
</Text>
          </div>
        </div>

        {/* Navigation entre chapitres */}
        <div
          className={`mt-12 pt-8 border-t flex justify-between items-center transition-colors duration-300 ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {/* Previous */}
          {prevChapitre ? (
            <Link href={`/series/${title}/chapitre/${prevChapitre.id}`}>
              <button
                className={`px-6 py-3 text-sm font-medium border rounded-lg transition-all duration-200 hover:scale-105 ${
                  isDark
                    ? "text-gray-300 border-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-500"
                    : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <ArrowLeft className="inline-block mr-2" /> Previous Chapter
              </button>
            </Link>
          ) : (
            <div /> // espace vide si pas de précédent
          )}

          <div
            className={`text-sm transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Chapter {chapitre?.chapterNumber} of {chapitresFiltres.length}
          </div>

          {/* Next */}
          {nextChapitre ? (
            <Link href={`/series/${title}/chapitre/${nextChapitre.id}`}>
              <button
                className={`px-6 py-3 text-sm font-medium border rounded-lg transition-all duration-200 hover:scale-105 ${
                  isDark
                    ? "text-gray-300 border-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-500"
                    : "text-gray-600 border-gray-300 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Next Chapter <ArrowRight className="inline-block ml-2" />
              </button>
            </Link>
          ) : (
            <div /> // espace vide si pas de suivant
          )}
        </div>
      </div>
    </div>
  )
}

export default TitleChapter
