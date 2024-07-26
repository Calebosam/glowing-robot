import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), sentryVitePlugin({
//     org: "amalitech-ggmbh",
//     project: "glowing-robot"
//   })],

//   build: {
//     sourcemap: true
//   }
// })

const plugins = [react()];

const NODE_ENV = "development"
// Check if the environment is one of the specified values to include Sentry plugin
const allowedEnvironments = ['production', 'staging', 'testing'];
if (allowedEnvironments.indexOf(NODE_ENV || '') !== -1) {
  plugins.push(sentryVitePlugin({
    org: 'amalitech-ggmbh',
    project: 'glowing-robot',
  }));
}


export default defineConfig({
  plugins,

  build: {
    sourcemap: true,
    outDir: "dist/pr-3"
  },
  // base: 'pr3'
});