/**
 * Zero-config PWA for Vite
 * https://github.com/antfu/vite-plugin-pwa
 */

import { VitePWA } from 'vite-plugin-pwa';
import {ViteEnv} from '../../../types/config';

export function configPwaConfig(env: ViteEnv) {
  const { VITE_USE_PWA, VITE_GLOB_APP_TITLE, VITE_GLOB_APP_SHORT_NAME } = env;

  if (VITE_USE_PWA) {
    // vite-plugin-pwa
    // eslint-disable-next-line new-cap
    const pwaPlugin = VitePWA({
      manifest: {
        name: VITE_GLOB_APP_TITLE,
        short_name: VITE_GLOB_APP_SHORT_NAME,
        icons: [
          {
            src: './resource/static/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './resource/static/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    });
    return pwaPlugin;
  }
  return [];
}
