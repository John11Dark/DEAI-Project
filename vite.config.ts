import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "DEAI_Project/",
  define: {
    "../../types/*": ["./src/types/*"],
    "./dashboard/*": ["./src/screen/dashboard/*"],
  },
});
