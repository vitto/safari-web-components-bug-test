import { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

export const config: Config = {
  namespace: "stencil-starter-project-name",
  globalStyle: 'public/css/tailwind.css',
  plugins: [
    postcss({
      plugins: [autoprefixer({ flexbox: "no-2009" }), tailwind()],
    }),
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      empty: false,
      buildDir: 'build',
      dir: 'public',
      indexHtml: 'index.html',
      serviceWorker: null, // disable service workers
    },
  ],
};
