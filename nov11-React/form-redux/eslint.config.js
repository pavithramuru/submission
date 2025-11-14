import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jestPlugin from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      jest: jestPlugin
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: { version: "detect" }
    }
  }
];
