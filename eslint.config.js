import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    }
  },
  env= {
    node: true,
    es2021: true
  }
]);


// export default defineConfig([
//   { 
//     files: ["**/*.{js,mjs,cjs}"], 
//     plugins: { js }, 
//     extends: [
//       "js/recommended",
//        "eslint/recommended"
//       ], 
//     languageOptions: { globals: globals.node },
//     parserOptions: {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//       },
//     "env": {
//           "node": true,
//           "es6": true,
//           "mocha":true
//       },
//   },
// ]);
