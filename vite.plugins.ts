import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import { PluginOption } from "vite";
import checker from "vite-plugin-checker";
import commonjs from "vite-plugin-commonjs";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export const getPlugins = (): PluginOption[] => [
  commonjs(),
  tsconfigPaths(),
  react(),
  checker({
    typescript: true,
  }),
  svgr({
    svgrOptions: {
      exportType: "default",
    },
  }),
  legacy({
    targets: [">0.2%", "not dead", "not op_mini all"],
  }),
];
