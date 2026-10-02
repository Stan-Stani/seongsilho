#!/usr/bin/env bash
# Plays chapter 1 end to end in headless Chrome and prints the log. Exit 1 if any error/assert fired.
set -euo pipefail
cd "$(dirname "$0")/.."
OUT=$(mktemp -d)
python3 - "$OUT" <<'PY'
import sys,re
out=sys.argv[1];s=open('index.html',encoding='utf-8').read();d=open('tests/playtest-driver.js',encoding='utf-8').read()
open(out+'/playtest.html','w',encoding='utf-8').write(s.replace('</body></html>','<script>'+d+'</script>\n</body></html>'))
for i,sc in enumerate(re.findall(r'<script>(.*?)</script>',s,re.S)):open(f'{out}/s{i}.js','w').write(sc)
PY
for f in "$OUT"/s*.js; do node --check "$f"; done
timeout 180 flatpak run --filesystem="$OUT" com.google.Chrome --headless=new --disable-gpu --virtual-time-budget=150000 \
  --dump-dom "file://$OUT/playtest.html" 2>/dev/null | python3 -c '
import re,html,sys;s=sys.stdin.read();m=re.search(r"<pre id=\"testlog\">(.*?)</pre>",s,re.S)
t=html.unescape(m.group(1)) if m else "ERRORS:\nNO LOG";print(t);sys.exit(0 if t.startswith("ERRORS:\nnone") else 1)'
