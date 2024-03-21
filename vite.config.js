import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bleyyannick/FM_Jobs_Listing",
  plugins: [react()],
});
