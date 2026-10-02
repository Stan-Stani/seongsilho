#!/usr/bin/env python3
"""Assemble index.html from src/: shell + chapter registry + chapters (in order) + engine."""
import pathlib,re
root=pathlib.Path(__file__).parent
shell=(root/'src/shell.html').read_text(encoding='utf-8')
chs=sorted((root/'src/chapters').glob('ch*.js'),key=lambda p:int(re.search(r'\d+',p.stem).group()))
parts=['<script>\n/* Chapters register themselves here; each keeps its own save. */\nconst CHAPTERS=[];\n</script>']
parts+=[f'<script>\n{p.read_text(encoding="utf-8")}</script>' for p in chs]
parts.append(f'<script>\n{(root/"src/engine.js").read_text(encoding="utf-8")}</script>')
(root/'index.html').write_text(shell.replace('<!--SCRIPTS-->','\n'.join(parts)),encoding='utf-8')
print('built index.html with',len(chs),'chapter(s)')
