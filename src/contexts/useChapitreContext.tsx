"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { chapitre } from "@/db/schemas"; // ✅ ton schéma Drizzle
type Chapitre = typeof chapitre.$inferInsert;

interface ChapitreContextType {
  chapitres: Chapitre[];
  addChapitre: (chapitre: Chapitre) => void;
  removeChapitre: (id: number) => void;
  addChapitres: (chapitre: Omit<Chapitre, "id">) => void;
  allChapitres: () => Promise<Chapitre[] | null>;
  allBookChapitres: (bookId: number) => Promise<Chapitre[] | null>;
    getChapitreById: (id: number) => Promise<Chapitre | null>; // ✅ ajout
}

const ChapitreContext = createContext<ChapitreContextType | undefined>(undefined);

export const ChapitreProvider = ({ children }: { children: ReactNode }) => {
  const [chapitres, setChapitres] = useState<Chapitre[]>([]);


  // ✅ ajouter un chapitre en local
  const addChapitre = useCallback((newChapitre: Chapitre) => {
    setChapitres((prev) => [...prev, newChapitre]);
  }, []);

  // ✅ envoyer un chapitre à l'API
  const addChapitres = useCallback(
    async (chap: Omit<Chapitre, "id">) => {
      await fetch("/api/chapitre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(chap),
      });
    },
    []
  );

  // ✅ supprimer un chapitre du state
  const removeChapitre = useCallback((id: number) => {
    setChapitres((prev) => prev.filter((chap) => chap.id !== id));
  }, []);

  // ✅ récupérer tous les chapitres
  const allChapitres = async () => {
    try {
      const response = await fetch("/api/chapitre", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status} : ${response.statusText}`);
      }

      const data: Chapitre[] = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la récupération des chapitres :", error);
      return null;
    }
  };


const allBookChapitres = async (bookId: number) => {
  try {
    const response = await fetch(`/api/chapitre/book/${bookId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }

    const data: Chapitre[] = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des chapitres :", error);
    return null;
  }
};




const getChapitreById = async (id: number) => {
  try {
    const response = await fetch(`/api/chapitre/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }

    const data: Chapitre = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération du chapitre :", error);
    return null;
  }
};

























  // ✅ charger les chapitres au montage
  useEffect(() => {
    const fetchChapitres = async () => {
      const result = await allChapitres();
      if (result) setChapitres(result);
    };

    fetchChapitres();
  }, []);

  const valeur = {
    chapitres,
    addChapitre,
    removeChapitre,
    addChapitres,
    allChapitres,
    allBookChapitres,
     getChapitreById, // ✅
  };

  return <ChapitreContext.Provider value={valeur}>{children}</ChapitreContext.Provider>;
};

// ✅ hook personnalisé
export const useChapitre = () => {
  const context = useContext(ChapitreContext);
  if (!context) {
    throw new Error("useChapitre doit être utilisé dans un <ChapitreProvider>");
  }
  return context;
};
