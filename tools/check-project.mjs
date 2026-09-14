import fs from 'node:fs';
import path from 'node:path';
const required = ['index.html','README.md','package.json','server.js','启动游戏.bat','public/style.css','public/app-enhancements.js','src/game-design.md','src/ai-behavior.md','src/roles.md','src/ai-dialogue.md'];
const missing = required.filter((file) => !fs.existsSync(path.resolve(file)));
if (missing.length) { console.error('缺少文件：', missing.join(', ')); process.exit(1); }
console.log(`工程检查通过：${required.length} 个核心文件齐全`);
