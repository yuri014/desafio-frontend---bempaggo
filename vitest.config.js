/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
