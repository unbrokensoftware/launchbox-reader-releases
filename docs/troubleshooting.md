---
title: Troubleshooting
description: Common issues and fixes for LaunchBox Reader.
---

# Troubleshooting

This page covers common user-facing issues and quick things to try.

## A Document Does Not Open

Try these checks:

- Confirm the file exists.
- Confirm the file type is supported.
- If the document is in an archive, confirm the archive opens in another tool.
- If it is a PDF, confirm it is not password protected.
- If it is an image folder, confirm the folder contains supported image files.

See [Supported Formats](supported-formats.html).

## The Wrong Page Opens

LaunchBox Reader normally resumes documents where you left off.

If a document opens somewhere unexpected:

- Check whether the document was previously opened.
- Try moving to the correct page and closing the reader normally.
- Reopen the document and confirm the position is saved.

## The Page Looks Too Large or Too Small

Open Settings and try:

- Fit
- Fit width
- Fit height
- Free zoom
- A different margin level
- Single page instead of spread

Scanned manuals vary widely, so one fit mode may work better than another depending on the document.

## Contents Looks Empty

Not all documents include a table of contents.

If a document does not include one, add bookmarks for the pages you care about. The Contents panel will show those bookmarks so you can jump back to them later.

## Controller Input Does Not Work

Try these checks:

- Make sure the controller is connected before opening the reader.
- Check that Windows can see the controller.
- Confirm the reader actions are mapped if you are using custom mappings.
- If you use multiple controller types, confirm the active controller profile is the one you expect.

## Keyboard or Controller Focus Feels Stuck

Use Back to return from Settings or Contents to the reader chrome. Use Tab to focus the chrome from the document with the default keyboard mapping.

If you customized mappings, confirm that Back, Focus chrome, overlay movement, and overlay activation still have usable bindings.

## A Comic or Image Folder Is Out of Order

LaunchBox Reader sorts image pages by filename.

For best results, use numbered filenames with leading zeroes:

- `Page 001.png`
- `Page 002.png`
- `Page 003.png`

Avoid mixed numbering like:

- `Page 1.png`
- `Page 10.png`
- `Page 2.png`

That can sort differently than expected.

## Still Having Trouble

When reporting a problem, include:

- The file type.
- Whether it happens when opening the reader normally or from another application.
- Whether it happens with one document or many.
- What you expected to happen.
- What happened instead.
