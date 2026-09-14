# AI伪装狼人杀

GitHub Pages 单机版。现在同时提供兼容单文件入口和多文件工程结构。

## 工程结构

```text
index.html                  兼容入口，双击即可运行
public/style.css            工程版扩展样式
public/app-enhancements.js  体验增强入口
src/game-design.md          核心循环与设计目标
src/ai-behavior.md          AI 行为与接口说明
src/roles.md                角色说明
server.js                   本地静态服务
启动游戏.bat                Windows 一键启动
tools/check-project.mjs     工程结构检查
```

## 启动方式

下载后双击 `index.html`，不需要 Node.js，不填 API Key 也可以完整游玩。

安装 Node.js 18+ 后，也可以双击 `启动游戏.bat`，或执行 `npm start`，然后打开 `http://localhost:5179`。

API Key 是可选项。留空使用本地模拟 AI；密钥只保存在浏览器本地，不要写入 GitHub 仓库。
