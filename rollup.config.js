import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
    input: "src/index.tsx",
    output: [
        //tells Rollup where to bundle your file to and in what format
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
            strict: false,
        },
    ],
    plugins: [
        //tells Rollup which plugins we want to use along with the configuration for each one
        sass({ insert: true }),
        typescript({ objectHashIgnoreUnknownHack: true }),
    ],
    external: ["react", "react-dom"], //tells Rollup which modules being used by the package should be supplied by the host environment (wherever it’s being used)
};
