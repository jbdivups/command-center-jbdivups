import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [basicSsl()], // Add this to enable HTTPS
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/palantir': {
        target: 'https://aptia.palantirfoundry.com',
        changeOrigin: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('proxyReq', (_proxyReq, req) => {
            console.log(`[Proxy] ${req.method} ${req.url} -> ${options.target}`);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log(`[Proxy] Response: ${proxyRes.statusCode} for ${req.url}`);
          });
          proxy.on('error', (err, req) => {
            console.error(`[Proxy] Error on ${req.url}:`, err);
          });
        },
        rewrite: (path: string) => path.replace(/^\/palantir/, '')
      }
    }
  },
  base: '/command-center',
});
