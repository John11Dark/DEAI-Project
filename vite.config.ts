import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  paths: {
    "../../types/*": ["./src/types/*"],
    "./dashboard/9*": ["./src/screen/dashboard/*"],
  },
});
