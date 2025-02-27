import { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";
import alias from '@rollup/plugin-alias'
import { inlineSvg } from 'stencil-inline-svg'
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import path from 'path';

export const config: Config = {
  namespace: "stencil-starter-project-name",
  globalStyle: 'public/css/tailwind.css',
  plugins: [
    postcss({
      plugins: [autoprefixer({ flexbox: "no-2009" }), tailwind()],
    }),
    alias({
      entries: [
        { find: /^@common\/(.*)$/, replacement: path.resolve('.', './src/common/$1') },
        { find: /^@component\/(.*)$/, replacement: path.resolve('.', './src/components/$1') },
        { find: /^@dictionary\/(.*)$/, replacement: path.resolve('.', './src/dictionary/$1') },
        { find: /^@event\/(.*)$/, replacement: path.resolve('.', './src/event-detail/$1') },
        { find: /^@fixture\/(.*)$/, replacement: path.resolve('.', './src/fixtures/$1') },
        { find: /^@meta\/(.*)$/, replacement: path.resolve('.', './src/meta/$1') },
        { find: /^@icon\/([a-zA-Z-\/]+)\.svg$/, replacement: path.resolve(__dirname, './public/assets/svg/$1.svg') },
        { find: /^@tailwind\/(.*)$/, replacement: path.resolve('.', './src/tailwind/$1') },
        { find: /^@test\/(.+)$/, replacement: path.resolve('.', './src/test/$1') },
        { find: /^@type\/(.+)$/, replacement: path.resolve('.', './src/type/$1') },
      ],
    }),
    inlineSvg(),
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
