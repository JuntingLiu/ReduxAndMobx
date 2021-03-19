# React - MobX

## 支持装饰器语法

以下的配置方式，不需要通过 `npm run reject` 将配置暴露出来，就可以完美支持装饰器语法。

### 1. 安装相关插件

```shell
yarn add react-app-rewired @babel/plugin-proposal-decorators customize-cra -D

# OR
npm install react-app-rewired @babel/plugin-proposal-decorators customize-cra -D
```

### 2. config-overrides.js

在项目根目录下创建此 `config-overrides.js` 文件, 并配置以下内容：

```js
const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(addDecoratorsLegacy())
```

### 3. package.json

在此文件重新配置启动脚本命令，用我们新配置覆盖官方提供的。

```json
{
  // 省略无关配置......
  "scripts" : {
    "start" : "react-app-rewired start",
    "build" : "react-app-rewired build",
    "test" : "react-app-rewired test",
  }
}
```

> 使用 VScode 编辑器时，如果出现关于装饰器的语法警告，修改配置："javascript.implicitProjectConfig.experimentalDecorators": true
