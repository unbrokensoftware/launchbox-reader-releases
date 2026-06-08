---
title: Developer Integration Guide
description: Integrate LaunchBox Reader into another application as a standalone process.
---

# Developer Integration Guide

This section is for developers who want to launch LaunchBox Reader from their own application.

LaunchBox Reader is designed as a standalone executable. Your application starts the reader process and passes the document path and launch options on the command line.

## Integration Model

LaunchBox Reader is not currently distributed as an embeddable SDK or in-process control.

The supported integration model is:

1. Ship or locate `LaunchBox.Reader.exe`.
2. Start it as a separate process.
3. Pass a file or folder with `--path`.
4. Optionally pass launch preferences such as fullscreen, theme, page, progress, or monitor placement.
5. Let the reader manage its own settings, cache, bookmarks, and reading state.

This keeps the reader isolated from the host application. If the reader exits or encounters a document-specific issue, the host application remains separate.

## Common Use Cases

- Open a manual from another application.
- Open a guide, map, or reference document from a media details screen.
- Open comics or image archives from a media library.
- Start fullscreen on the same monitor as the calling app.
- Resume a document where the user left off.
- Open a document without showing reader chrome.

## Key Concepts

- **Target path**: The document file or image folder to open.
- **Launch options**: Command-line arguments that influence this launch.
- **Reader data root**: The folder that contains SQLite databases, logs, and cache files.
- **Document state**: Saved reading position and per-document preferences.
- **Global settings**: Default reader settings and input mappings.

## Recommended Flow

For most integrations:

1. Validate that the document path exists.
2. Start `LaunchBox.Reader.exe` with `--path`.
3. Pass `--launch-window-handle`, `--launch-point`, or `--launch-bounds` so the reader opens on the expected monitor.
4. Pass `--fullscreen` if the host app is in a TV or couch interface.
5. Leave resume enabled unless the user explicitly asks to start fresh.

Example:

```powershell
LaunchBox.Reader.exe `
  --path "D:\Games\Manuals\Example Manual.pdf" `
  --document-title "Example Manual" `
  --fullscreen `
  --launch-window-handle 0x0003058A
```

## What the Reader Owns

LaunchBox Reader owns:

- Window rendering
- Document parsing and page preparation
- Reading position
- Bookmarks
- Reader settings
- Keyboard and controller mappings
- Cache files
- Diagnostic logs

Your app does not need to create or edit reader databases for normal use.

## More Detail

- [Command Line Reference](command-line.html)
- [Files, Data, and Cache Layout](file-layout.html)
- [SQLite Data Stores](sqlite-stores.html)
- [Integration Examples](examples.html)
