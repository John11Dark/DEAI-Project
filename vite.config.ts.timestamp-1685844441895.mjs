// vite.config.ts
import { defineConfig } from "file:///C:/Users/johnm/Desktop/DEAI-Project/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/johnm/Desktop/DEAI-Project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "./",
  define: {
    "../../types/*": ["./src/types/*"],
    "./dashboard/*": ["./src/screen/dashboard/*"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb2hubVxcXFxEZXNrdG9wXFxcXERFQUktUHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcam9obm1cXFxcRGVza3RvcFxcXFxERUFJLVByb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2pvaG5tL0Rlc2t0b3AvREVBSS1Qcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBiYXNlOiBcIi4vXCIsXG4gIGRlZmluZToge1xuICAgIFwiLi4vLi4vdHlwZXMvKlwiOiBbXCIuL3NyYy90eXBlcy8qXCJdLFxuICAgIFwiLi9kYXNoYm9hcmQvKlwiOiBbXCIuL3NyYy9zY3JlZW4vZGFzaGJvYXJkLypcIl0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVMsU0FBUyxvQkFBb0I7QUFDbFUsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixpQkFBaUIsQ0FBQyxlQUFlO0FBQUEsSUFDakMsaUJBQWlCLENBQUMsMEJBQTBCO0FBQUEsRUFDOUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=