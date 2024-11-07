// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 3000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const BASE_URL = "https://ackenney.github.io";
// this is the astro command your npm script runs


// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  integrations: [tailwind()],
});
