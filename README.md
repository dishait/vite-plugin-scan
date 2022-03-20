# vite-plugin-scan

动态扫描 vite 插件

<br />

<br />
<br />

## Usage 🦕


### 安装

```shell
npm i vite-plugin-scan
```

### 配置

```ts
// vite.config.js
import { defineConfig } from 'vite'
import Scan from 'vite-plugin-scan'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        Vue(),
        Scan({
            source: 'modules/**/*'
        })
    ]
})
```

<br />

### 使用

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { files } from 'virtual:scan'

const app = createApp(App)

console.log(files) // 获取文件

app.mount('#app')
```

### 类型声明

如果你是 `ts` 项目，可以在 `tsconfig.json` 中添加如下配置

```ts
{
    "compilerOptions": {
        "types": ["vite-plugin-scan/client"]
    }
}
```

<br />
<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).

<br />