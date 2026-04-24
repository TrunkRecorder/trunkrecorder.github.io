#!/usr/bin/env python3
"""
Sync docs from trunk-recorder to the Docusaurus site.

Rules:
- Markdown files: if source has Docusaurus frontmatter, use it as-is.
  If source lacks frontmatter but the destination already has it, prepend
  the destination's frontmatter to the incoming content so sidebar labels
  and positions are preserved.
- Non-markdown files (images, JSON, etc.): copied as-is.
- Files removed from the source are removed from the destination.
- Skips OS/editor junk files (.DS_Store, Thumbs.db, etc.).

Usage:
    python3 sync-docs.py <src_docs_dir> <dst_docs_dir>

Example:
    python3 scripts/sync-docs.py ../trunk-recorder/docs docs
"""

import os
import re
import shutil
import sys
from pathlib import Path

FRONTMATTER_RE = re.compile(r"^---[ \t]*\n(.*?\n)---[ \t]*\n", re.DOTALL)

SKIP_FILES = {".DS_Store", "Thumbs.db", ".gitkeep"}
MARKDOWN_SUFFIXES = {".md", ".mdx"}


def parse_frontmatter(content: str):
    """Return (frontmatter_block, body) or (None, full_content)."""
    m = FRONTMATTER_RE.match(content)
    if m:
        return m.group(0), content[m.end():]
    return None, content


def sync_docs(src_dir: Path, dst_dir: Path) -> bool:
    """Sync src_dir into dst_dir. Returns True if any files changed."""
    changed = False

    # --- Forward sync: source → destination ---
    src_files: set[Path] = set()
    for src_file in sorted(src_dir.rglob("*")):
        if src_file.is_dir():
            continue
        if src_file.name in SKIP_FILES:
            continue

        rel = src_file.relative_to(src_dir)
        src_files.add(rel)
        dst_file = dst_dir / rel
        dst_file.parent.mkdir(parents=True, exist_ok=True)

        if src_file.suffix.lower() not in MARKDOWN_SUFFIXES:
            # Non-markdown: binary copy if different
            if not dst_file.exists() or src_file.read_bytes() != dst_file.read_bytes():
                shutil.copy2(src_file, dst_file)
                print(f"  copied:  {rel}")
                changed = True
            continue

        src_content = src_file.read_text(encoding="utf-8")
        src_fm, src_body = parse_frontmatter(src_content)

        # Read existing destination frontmatter (if any)
        dst_fm = None
        if dst_file.exists():
            dst_fm, _ = parse_frontmatter(dst_file.read_text(encoding="utf-8"))

        # Frontmatter priority: source > existing destination > none
        final_fm = src_fm or dst_fm or ""
        final_content = (final_fm + src_body) if final_fm else src_body

        if not dst_file.exists() or dst_file.read_text(encoding="utf-8") != final_content:
            dst_file.write_text(final_content, encoding="utf-8")
            action = "added" if not dst_file.exists() else "updated"
            print(f"  {action}:  {rel}")
            changed = True

    # --- Reverse sync: remove files deleted from source ---
    for dst_file in sorted(dst_dir.rglob("*")):
        if dst_file.is_dir():
            continue
        rel = dst_file.relative_to(dst_dir)
        if rel not in src_files:
            dst_file.unlink()
            print(f"  removed: {rel}")
            changed = True

    return changed


def main():
    if len(sys.argv) < 3:
        print(f"Usage: {sys.argv[0]} <src_docs_dir> <dst_docs_dir>", file=sys.stderr)
        sys.exit(1)

    src_dir = Path(sys.argv[1]).resolve()
    dst_dir = Path(sys.argv[2]).resolve()

    if not src_dir.is_dir():
        print(f"Error: source directory not found: {src_dir}", file=sys.stderr)
        sys.exit(1)

    print(f"Syncing {src_dir} → {dst_dir}")
    changed = sync_docs(src_dir, dst_dir)

    if changed:
        print("Sync complete — files were updated.")
    else:
        print("Sync complete — no changes.")


if __name__ == "__main__":
    main()
