import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/webapi": {
                target: "http://localhost:8080/feeding_tomorrow_backend_war",
                changeOrigin: true
            }
        }
    }
});
