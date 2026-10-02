#!/usr/bin/env bash
# Mirror this private repo to its public twin WITHOUT notes/ (the book summaries/canon stay private).
# Same history and authors; notes/ is filtered out of every commit. Usage: tools/sync_public.sh
set -euo pipefail
cd "$(dirname "$0")/.."
PUBLIC=$(cat tools/public-remote)            # e.g. https://github.com/Stan-Stani/seongsilho.git
BRANCH=$(git rev-parse --abbrev-ref HEAD)
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
git clone -q --no-local . "$TMP/r"
cd "$TMP/r"
git filter-repo --force --quiet --invert-paths --path-regex '^notes/(?!known-from-seongsilho\.txt$)'
if git ls-files | grep -q '^notes/' && git ls-files notes | grep -vq 'known-from-seongsilho.txt'; then echo "notes leaked — aborting"; exit 1; fi
git push -q --force "$PUBLIC" "$BRANCH:$BRANCH"
echo "synced $BRANCH → $PUBLIC ($(git rev-list --count HEAD) commits, notes/ excluded)"
