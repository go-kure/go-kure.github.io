#!/usr/bin/env bash
# gen-sitemap-index.sh — Regenerate the domain-root sitemap index and robots.txt.
#
# Each project/slot (e.g. kure/dev/, launcher/dev/, and future stable kure/ or
# versioned kure/v0.1/) is deployed by its own repo's workflow and ships a Hugo
# sitemap.xml at its base path. Nothing serves the domain root itself, so this
# script emits a <sitemapindex> at /sitemap.xml referencing every per-slot
# sitemap, plus a robots.txt pointing crawlers at it. New slots are picked up
# automatically — no edits needed when a stable or versioned slot is added.
#
# Usage: bash scripts/gen-sitemap-index.sh   (run from anywhere; operates on repo root)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BASE="https://www.gokure.dev"

# Collect per-slot sitemaps. -mindepth 2 skips the root sitemap.xml we generate
# here (depth 1), so the index never references itself.
mapfile -t sitemaps < <(find . -mindepth 2 -name sitemap.xml -type f | sed 's|^\./||' | sort)

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  for s in "${sitemaps[@]}"; do
    echo "  <sitemap><loc>${BASE}/${s}</loc></sitemap>"
  done
  echo '</sitemapindex>'
} > sitemap.xml

cat > robots.txt <<EOF
User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
EOF

echo "Wrote sitemap.xml (${#sitemaps[@]} slot sitemaps) and robots.txt"
