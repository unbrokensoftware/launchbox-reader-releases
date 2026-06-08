---
layout: default
title: SQLite Data Stores
description: Reader settings and state database overview for integrators.
---

# SQLite Data Stores

LaunchBox Reader uses SQLite for durable settings and reading state.

Most integrations do not need to read or write these databases. They are documented here so developers know what files exist, where user data lives, and what can be backed up or reset.

## Important Guidance

- Treat the databases as reader-owned implementation details.
- Prefer command-line launch options over editing SQLite directly.
- Close the reader before backing up, deleting, or inspecting databases.
- Schema versions can change between releases.
- Use `PRAGMA user_version` to inspect the schema version.

## `reader-settings.db`

This database stores global reader settings and input mappings.

Current schema version: `5`

### `GlobalSettings`

One-row table containing global/default reader behavior.

Important fields include:

| Column | Purpose |
| --- | --- |
| `Id` | Always `1`. |
| `ReaderProvider` | Reader provider preference. |
| `ExternalReaderExecutablePath` | Path to an external reader if configured. |
| `FullscreenByDefault` | Whether fullscreen is preferred by default. |
| `ResumeByDefault` | Whether documents resume by default. |
| `ShowMenuOnOpenByDefault` | Whether chrome/menu is shown on open. |
| `Theme` | Default theme. |
| `ReadingDirection` | Default reading direction. |
| `LayoutMode` | Default fixed-layout layout. |
| `FitMode` | Default fixed-layout fit mode. |
| `FixedLayoutMargin` | Default fixed-layout margin. |
| `StackedDirection` | Default stacked layout direction. |
| `PageTurnMode` | Default page turn mode. |
| `FlowMode` | Default EPUB flow. |
| `EpubPageLayoutMode` | Default EPUB paginated layout. |
| `BookFontFamily` | Default EPUB font family. |
| `EpubTextScalePercent` | Default EPUB text scale. |
| `MarginLevel` | Default EPUB margin level. |
| `LineSpacingLevel` | Default EPUB line spacing. |
| `NightModeEnabled` | Default EPUB night mode. |
| `UpdatedUtc` | Last update timestamp. |

### `InputBindings`

Stores keyboard and controller mapping defaults and user overrides.

Important fields include:

| Column | Purpose |
| --- | --- |
| `BindingKey` | Unique binding identity. |
| `OverrideOfBindingKey` | Row key being overridden for user mappings. |
| `DeviceKind` | `Keyboard` or `Controller`. |
| `BindingContext` | Where the binding applies, such as `Reading`, `Overlay`, or `Global`. |
| `BindingGroupKey` | Logical grouping used by settings UI. |
| `Action` | Reader action name. |
| `Input1`, `Input2`, `Input3` | One to three keys/buttons for a combo. |
| `ActivationMode` | `Press` or `LongPress`. |
| `HoldDurationMs` | Long-press duration when applicable. |
| `DisplayName` | User-facing action label. |
| `GroupName` | User-facing grouping. |
| `Description` | User-facing help text. |
| `SortOrder` | Display order. |
| `IsUserOverride` | Distinguishes defaults from user mappings. |
| `IsEnabled` | Whether this binding is active. |

Indexes:

- `IX_InputBindings_BindingKey`
- `IX_InputBindings_DeviceContext`
- `IX_InputBindings_DeviceGroup`

## `reader-state.db`

This database stores per-document reading state and bookmarks.

Current schema version: `8`

### `DocumentState`

One row per known document.

Important fields include:

| Column | Purpose |
| --- | --- |
| `DocumentKey` | Stable document identity key. |
| `SourcePath` | Original document path. |
| `Title` | Document title, when known. |
| `PageIndex` | Zero-based page index. |
| `ZoomLevel` | Saved zoom level. |
| `Theme` | Saved theme. |
| `LayoutMode` | Saved layout. |
| `FlowMode` | Saved flow. |
| `FitMode` | Saved fit mode. |
| `LastOpenedUtc` | Last opened timestamp. |
| `EpubChapterIndex` | EPUB chapter location. |
| `EpubChapterPageIndex` | EPUB paginated chapter page. |
| `EpubVirtualPageIndex` | EPUB virtual page. |
| `EpubBlockIndex` | EPUB continuous block location. |
| `EpubBlockOffsetRatio` | EPUB continuous block offset. |
| `EpubContinuousProgressRatio` | EPUB continuous progress. |
| `PageTurnMode` | Saved page turn mode. |
| `FixedLayoutMargin` | Saved fixed-layout margin. |
| `BookFontFamily` | Saved EPUB font. |
| `EpubTextScalePercent` | Saved EPUB text scale. |
| `EpubPageLayoutMode` | Saved EPUB layout. |
| `MarginLevel` | Saved EPUB margin level. |
| `LineSpacingLevel` | Saved EPUB line spacing. |
| `NightModeEnabled` | Saved EPUB night mode. |
| `StackedDirection` | Saved stacked direction. |
| `ReadingDirection` | Saved reading direction. |
| `VerticalStackedCenteredPageIndex` | Stacked vertical anchor page. |
| `VerticalStackedCenteredPageProgress` | Stacked vertical anchor progress. |
| `HorizontalStackedCenteredPageIndex` | Stacked horizontal anchor page. |
| `HorizontalStackedCenteredPageProgress` | Stacked horizontal anchor progress. |
| `FixedLayoutViewportOffsetXRatio` | Saved horizontal viewport offset for zoomed fixed-layout pages. |
| `FixedLayoutViewportOffsetYRatio` | Saved vertical viewport offset for zoomed fixed-layout pages. |
| `HasCustomPreferences` | Whether document-specific preferences should be used. |

### `Bookmark`

Stores user bookmarks.

Important fields include:

| Column | Purpose |
| --- | --- |
| `DocumentKey` | Document identity key. |
| `PageIndex` | Zero-based page index. |
| `EpubChapterIndex` | EPUB chapter location. |
| `EpubChapterPageIndex` | EPUB paginated chapter page. |
| `EpubVirtualPageIndex` | EPUB virtual page. |
| `EpubBlockIndex` | EPUB continuous block location. |
| `EpubBlockOffsetRatio` | EPUB continuous block offset. |
| `Title` | Bookmark title. |
| `CreatedUtc` | Creation timestamp. |

## Backup and Reset

To back up user reader data, copy the entire data root while the reader is closed.

To reset only rendered/derived data, delete `Cache/`.

To reset reading progress and bookmarks, delete `reader-state.db`.

To reset global settings and input mappings, delete `reader-settings.db`.
