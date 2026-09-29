#!/usr/bin/env bash
# 台本（text.js）から、1枚ずつ送れる紙芝居 index.html を組み立てる。
#   ./kamishibai/build.sh
# 道具は kou-uni/kamishibai（版を固定）。中身はこのフォルダの text.js と assets/。
# ★push すると GitHub Actions が同じことをして index.html を更新するので、手元で走らせなくてもよい。
set -euo pipefail
cd "$(dirname "$0")"
KIT_PIN="1632f0083109ff97e8039c00bd50f487ac6e977c"
K=.kit
command -v node >/dev/null || { echo "node が要ります"; exit 1; }
if [ ! -d "$K/.git" ]; then git clone --quiet https://github.com/kou-uni/kamishibai.git "$K"; fi
git -C "$K" fetch --quiet && git -C "$K" checkout --quiet "$KIT_PIN"
cp text.js "$K/content/stackchan-text.js"
mkdir -p "$K/assets" && cp assets/*.png "$K/assets/"
( cd "$K" && node build.mjs content/stackchan-text.js -o dist/stackchan-text.html )
cp "$K/dist/stackchan-text.html" index.html
echo "  ○ kamishibai/index.html  ($(du -h index.html | cut -f1 | tr -d ' '))"
