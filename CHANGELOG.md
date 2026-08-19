# Changelog

## 1.1.0

### New Document Formats

- Plain text (.txt) and rich text (.rtf) files now open as proper books with pages, chapters, and a table of contents, instead of a single endless page.
- Word documents (.docx) are now supported, including headings, lists, images, and bold, italic, and centred text.
- Older Word documents (.doc) now explain that they need to be saved as .docx, rather than failing without saying why.

### Two-Page Layout

- Scanned sheets that hold two book pages are split so each page fills its own side of the spread, and each half keeps the proportions of the original scan.
- A new Split Sheets setting - Auto, Never, or Always - lets you override the automatic detection for an unusual scan. It is remembered per document.
- Landscape and square pages now face each other in two-page layout instead of each taking a whole spread, so manuals and comics that are not portrait finally show two pages at once.

### Page Turn

- A turning page now lifts above and below the book instead of being cut off flat at the edges.
- The shading down the middle of the book no longer grows and shrinks while a page turns, and no longer jumps as a turn begins.
- The book stays centred in the window during a page turn.

### PDFs

- Pages containing only text now render on white paper. Previously some could appear as dark text on a dark background, which made them almost unreadable.
- Zoom now means the same thing across document types, and Fit Width fills the window properly on large displays.

### Comics and Magazines

- Solid RAR comic archives (.cbr) now open instead of failing.

### EPUB

- Fixed EPUB books that opened as a single cover page with no way to reach the rest of the book.

### Stacked Layout

- Pages in stacked view are now sized consistently, instead of appearing at wildly different sizes after switching from another layout.

## 1.0.3

### Controller Support

- Restored controller navigation inside the reader chrome after toggling it with Y.
- D-pad Left/Right now moves between chrome buttons, A activates the focused button, and B closes the chrome.

## 1.0.2

### Controller Support

- Controller support is now complete in the LaunchBox Reader plugin package, so Xbox-style controllers should work properly after updating.
- Page turning now works with D-pad Left/Right and Left Stick Left/Right.
- LB/RB now jump backward and forward by 5%, making longer books and manuals easier to skim.
- Progress scrub mode now works fully from a controller: open it with LB + RB, move with the D-pad or Left Stick, confirm with A, or cancel with B.
- The progress bar now opens and highlights when progress scrub mode starts, so it is clear where controller input is going.

### Custom Controls

- Custom keyboard and controller mappings from LaunchBox Options are now honored more consistently in the reader.

## 1.0.0

Initial public release.
