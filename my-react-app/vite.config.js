import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Utilise le polling, nécessaire parfois dans les environnements Docker
    },
    host: true, // Permet à l'application d'être accessible sur toutes les interfaces réseau
    port: 5173, // Définit le port utilisé
  },
});
