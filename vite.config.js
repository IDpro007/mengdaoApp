import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => {
            return `../es/${name}/style/index`;
          },
        },
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@assets": path.resolve(__dirname, "src/assets"),
    }
  },
  server: {
    proxy: {
     // 此处配置只能解决本地的跨域问题, 不会被打包到生产环境, 
     //
     // 所以需要在前端项目所在的站点 为nginx配置反向代理, 不是提供api接口所在的站点哦!
     //
      '/apiUrl': {
        target: 'localhost:8009',
        changeOrigin: true, //支持跨域
        rewrite: path => path.replace(/^\/apiUrl/, '')
      },
    }
  }
});

