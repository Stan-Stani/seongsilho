#!/usr/bin/env python3
"""Assemble index.html from src/: shell + chapter registry + chapters (in order) + engine."""
import pathlib,re,sys
root=pathlib.Path(__file__).parent
shell=(root/'src/shell.html').read_text(encoding='utf-8')
chs=sorted((root/'src/chapters').glob('ch*.js'),key=lambda p:int(re.search(r'\d+',p.stem).group()))
if '--chapters' in sys.argv: # publish only finished chapters: --chapters ch1,ch3
    keep=sys.argv[sys.argv.index('--chapters')+1].split(',');chs=[p for p in chs if p.stem in keep]
parts=['<script>\n/* Chapters register themselves here; each keeps its own save. */\nconst CHAPTERS=[];\n</script>']
parts+=[f'<script>\n{p.read_text(encoding="utf-8")}</script>' for p in chs]
parts.append(f'<script>\n{(root/"src/engine.js").read_text(encoding="utf-8")}</script>')
out=pathlib.Path(sys.argv[sys.argv.index('--out')+1]) if '--out' in sys.argv else root/'index.html'
out.write_text(shell.replace('<!--SCRIPTS-->','\n'.join(parts)),encoding='utf-8')
print('built',out.name,'with',len(chs),'chapter(s)')
