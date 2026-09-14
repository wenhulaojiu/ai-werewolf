@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo 未检测到 Node.js 18+。本项目仍可双击 index.html 运行。
  echo 如需使用工程版启动器，请安装：https://nodejs.org/
  pause
  exit /b 1
)
start "AI伪装狼人杀服务" /min cmd /c "node server.js"
timeout /t 2 /nobreak >nul
start "" "http://localhost:5179"
