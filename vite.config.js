import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@base': path.resolve(__dirname, './src/@base-module'),
            '@vin': path.resolve(__dirname, './src/@vin-module')
        }
    }
})
