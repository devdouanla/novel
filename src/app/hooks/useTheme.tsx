"use client";


import {createContext,useContext,useState,ReactNode} from "react"
 
// Création du contexte ThemeContext avec une valeur par défaut
const ThemeContext = createContext({
    theme: "light", // Valeur initiale du thème
    toggleTheme: () => {} // Fonction par défaut (sera remplacée dans le Provider)
});

// Hook personnalisé pour accéder aux valeurs du contexte
export function useTheme() {
    // Récupération du contexte actuel
    const { theme, toggleTheme } = useContext(ThemeContext);

    return {
        isLight: theme === "light", // Vérifie si le thème est clair
        isDark: theme === "dark", // Vérifie si le thème est sombre
        theme, // Renvoie le thème actuel
        toggleTheme // Renvoie la fonction permettant de basculer le thème
    };
}

//composant Provider qui fournit le contexte aux composants enfants


export function ThemeContextProvider({children}:{children:ReactNode}){
      
    const [theme,setTheme] = useState('dark')

    const toggleTheme =()=>{
        setTheme(theme==='light'?'dark':'light')
    }
    return    <ThemeContext.Provider value={{
        theme,
        toggleTheme
    }}>

        {children}
    </ThemeContext.Provider>
}