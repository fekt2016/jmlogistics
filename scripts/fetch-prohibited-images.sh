#!/usr/bin/env bash
# Downloads representative stock photos from Unsplash CDN into public/.
# License: https://unsplash.com/license — keep ATTRIBUTION.txt with the site.
set -euo pipefail
PUB="$(cd "$(dirname "$0")/.." && pwd)/public"
TMP="$PUB/_tmp_dl.jpg"

fetch_png() {
  local url="$1" out="$2"
  curl -sfL "$url" -o "$TMP"
  sips -s format png "$TMP" --out "$PUB/$out" >/dev/null
  rm -f "$TMP"
}

mkdir -p "$PUB"
Q="w=800&auto=format&fit=crop&q=82"

# Thumbnails (800px wide JPEG → PNG via sips)
fetch_png "https://images.unsplash.com/photo-1547514701-42782101795e?${Q}" "prohibited-garlic.png"
fetch_png "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?${Q}" "prohibited-sachet-garlic.png"
fetch_png "https://images.unsplash.com/photo-1562157873-818bc0726f68?${Q}" "prohibited-shito.png"
fetch_png "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?${Q}" "prohibited-benylin.png"
fetch_png "https://images.unsplash.com/photo-1600891964092-4316c288032e?${Q}" "prohibited-weed.png"
fetch_png "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?${Q}" "prohibited-alasa-fruit.png"
fetch_png "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?${Q}" "prohibited-cow-skin-wele.png"
fetch_png "https://images.unsplash.com/photo-1603048297172-c92544798d5a?${Q}" "prohibited-meat.png"
fetch_png "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?${Q}" "prohibited-fried-meat.png"
fetch_png "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?${Q}" "prohibited-electronic-counter.png"
fetch_png "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?${Q}" "prohibited-meat-spices.png"
fetch_png "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?${Q}" "prohibited-ginger.png"

# Wide hero / collage placeholder
curl -sfL "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&auto=format&fit=crop&q=82" -o "$TMP"
sips -s format png "$TMP" --out "$PUB/prohibited-items.png" >/dev/null
rm -f "$TMP"

echo "OK: wrote prohibited *.png to $PUB"
