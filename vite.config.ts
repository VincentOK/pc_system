import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-ignore
import path, {resolve} from 'path';
function pathResolve(dir: string) {
  // eslint-disable-next-line no-undef
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
      alias: [
          // /@/xxxx => src/xxxx
          {
            find: /\/@\//,
            replacement: pathResolve('src') + '/'
          },
              // /#/xxxx => types/xxxx
              {
                find: /\/#\//,
                replacement: pathResolve('types') + '/'
              }
          // ['@vue/compiler-sfc', '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'],
          ]
  },
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (_name) => `ant-design-vue/dist/antd.css`
        }
      ]
    })
  ],
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  base: './', //打包路径
  server: {
    port: 9797, //启动端口
    open: true,
    // 反向代理
    proxy: {
      '/api': {
        target: 'http://192.168.2.9:8123/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    cors: true
  }
});
