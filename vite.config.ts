import presetIcons from "@unocss/preset-icons";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import compress from "vite-plugin-compress";

// https://vitejs.dev/config/
export default defineConfig((env) => ({
    base: "/",
    root: "./",
    build: { outDir: "./dist", sourcemap: true },
    plugins: [
        UnoCSS({ presets: [presetIcons({})] }),
        react(),
        ...(env.mode === "viz" ? [compress()] : []),
        checker({ typescript: true, overlay: { initialIsOpen: false, position: "tl" } }),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: "/src",
            },
        ],
    },
}));
