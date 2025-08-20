import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useTheme } from '@/app/hooks/useTheme'
import { useEffect } from 'react';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  // Largeur totale du switch
  width: 50,
  // Hauteur totale du switch
  height: 24,
  // Padding intérieur du switch
  padding: 6,

  // Styles pour la base du switch (la partie cliquable)
  '& .MuiSwitch-switchBase': {
    // Marge autour de la base du switch
    margin: 1,
    // Suppression du padding par défaut
    padding: 0,
    // Position initiale du bouton (thumb)
    transform: 'translateX(6px)',

    // Quand le switch est coché (activé)
    '&.Mui-checked': {
      // La couleur du bouton devient blanche
      color: '#fff',
      // Le bouton se déplace vers la droite
      transform: 'translateX(22px)',

      // Avant le "thumb" (bouton), on ajoute une image de fond (icône SVG)
      '& .MuiSwitch-thumb:before': {
        // On utilise une image SVG encodée en ligne dans l'URL
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#F0F465',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },

      // Styles appliqués à la piste (background du switch) quand activé
      '& + .MuiSwitch-track': {
        // Opacité maximale (visible)
        opacity: 1,
        // Couleur de fond gris clair
        backgroundColor: '#aab4be',
        // Application d'un style alternatif pour thème sombre (dark)
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },

  // Styles pour le bouton rond (thumb)
  '& .MuiSwitch-thumb': {
    // Couleur de fond du thumb en bleu foncé
    backgroundColor: '#1e3a8a',
    // Largeur du thumb
    width: 20,
    // Hauteur du thumb
    height: 20,

    // Avant le thumb, on place un pseudo-élément (icone SVG en fond)
    '&::before': {
      // Contenu vide nécessaire pour afficher le pseudo-élément
      content: "''",
      // Positionnement absolu pour recouvrir tout le thumb
      position: 'absolute',
      // Largeur 100% du thumb
      width: '100%',
      // Hauteur 100% du thumb
      height: '100%',
      // Position top-left
      left: 0,
      top: 0,
      // Pas de répétition de l'image de fond
      backgroundRepeat: 'no-repeat',
      // Centrage de l'image
      backgroundPosition: 'center',
      // Image SVG encodée en base64 affichée sur le thumb
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
         '#F0F465',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },

    // Application de styles alternatifs pour le thème sombre
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },

  // Styles pour la piste (le fond derrière le thumb)
  '& .MuiSwitch-track': {
    // Opacité maximale
    opacity: 1,
    // Couleur de fond grise claire
    backgroundColor: 'white',
    // Arrondi du fond (demi-hauteur)
    borderRadius: 20 / 2,

    // Styles alternatifs pour thème sombre
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export default function CustomizedSwitches() {
  const { toggleTheme, theme } = useTheme()
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <MaterialUISwitch onChange={toggleTheme} sx={{ m: 1 }} defaultChecked />
    </>
  );
}