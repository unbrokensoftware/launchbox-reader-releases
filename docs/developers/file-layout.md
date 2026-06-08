---
title: Files, Data, and Cache Layout
description: Standalone Reader folder layout, data root, logs, and cache locations.
---

# Files, Data, and Cache Layout

LaunchBox Reader keeps user data, settings, logs, and caches in a reader data root.

## Standalone Layout

For the standalone/public reader, data is stored beside the app:

```text
LaunchBox Reader/
  LaunchBox.Reader.exe
  LaunchBox.Reader.dll
  ...
  Data/
    reader-settings.db
    reader-state.db
    Logs/
    Cache/
```

This makes the standalone reader portable. If a user moves the folder, their reader data moves with it.

## Environment Override

The data root can be overridden with:

```text
LAUNCHBOX_READER_DATA_ROOT
```

If set, the reader expands environment variables and uses that folder as the data root.

Example:

```powershell
$env:LAUNCHBOX_READER_DATA_ROOT = "D:\ReaderData"
LaunchBox.Reader.exe --path "C:\Docs\Manual.pdf"
```

## Data Root Contents

| Path | Purpose |
| --- | --- |
| `reader-settings.db` | Global settings and keyboard/controller mappings. |
| `reader-state.db` | Per-document reading state and bookmarks. |
| `Logs/` | Diagnostic and crash logs. |
| `Cache/` | Rendered pages, EPUB metadata, repaired EPUB content, archive extraction cache, and document metadata. |

## Cache Contents

Cache contents are implementation details and may change between versions.

Common cache areas include:

| Folder | Purpose |
| --- | --- |
| `Cache/Pdf/` | Rendered PDF page images. |
| `Cache/Metadata/` | Document metadata such as page dimensions and table of contents data. |
| `Cache/EpubDocument/` | Parsed EPUB metadata cache. |
| `Cache/EpubContinuous/` | Continuous EPUB layout and last-read helper cache. |
| `Cache/EpubRepair/` | Repaired EPUB working files when needed. |
| `Cache/<document-key>/` | Document-specific image archive or EPUB asset cache. |

Your integration should not depend on cache file names or cache folder internals.

## Cleanup Guidance

It is safe for users to delete `Cache/` while the reader is closed. The reader will rebuild cache entries as needed.

Do not delete `reader-state.db` unless the user wants to remove reading progress and bookmarks.

Do not delete `reader-settings.db` unless the user wants to reset settings and input mappings.
