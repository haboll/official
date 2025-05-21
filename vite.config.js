import { defineConfig } from 'vite'
import { alias, root, pathResolve } from "./build/utils"
import { target, secure } from "./build/proxy"
import { include, exclude } from "./build/opt"
import { getPluginsList } from "./build/plugins";
import pxtovw from 'postcss-px-to-viewport-8-plugin';



// https://vite.dev/config/
export default defineConfig({
  root,
  resolve: {
    alias,
    extensions: ['.js', '.jsx', '.ts', '.jsx', '.json', '.vue']
  },
  server: {
    // 端口号
    port: 9527,
    host: "0.0.0.0",
    // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      '/api': {
        target: target,
        changeOrigin: true,
        secure
      },
    },
    // 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
    warmup: {
      clientFiles: ["./index.html", "./src/{views,components}/*"]
    }
  },
  plugins:  getPluginsList(),
  css: {
    postcss: {
      plugins: [
        pxtovw({
          unitToConvert: 'px', // 要转换的单位，默认为"px"
          viewportWidth: 393, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          unitPrecision: 3, // 单位转换后保留的精度
          include: /^(?:(?!mobile).)*$/,  // 忽略不需要转换的文件，正则表达式
        })
      ]
    }
  },
  optimizeDeps: {
    include,
    exclude
  },
  build: {
    // https://cn.vitejs.dev/guide/build.html#browser-compatibility
    target: "es2015",
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      input: {
        index: pathResolve("./index.html", import.meta.url)
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  },
})
