/* 工程版增强入口：不依赖 API Key，不改变原单文件逻辑。 */
(() => {
  const start = document.querySelector('#solo-start .panel');
  if (!start || start.querySelector('.project-panel')) return;
  const box = document.createElement('div');
  box.className = 'project-panel';
  box.innerHTML = '<span class="project-badge">工程版 v2 · 离线可玩</span><p><b>体验提示：</b>你是唯一狼人。夜晚选择目标，白天用发言影响 AI 投票。API Key 可选，不填也能完成完整游戏。</p>';
  start.insertBefore(box, start.firstChild);
})();
