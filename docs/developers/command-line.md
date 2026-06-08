# Command Line Reference

LaunchBox Reader is controlled at startup with command-line arguments.

## Basic Usage

```powershell
LaunchBox.Reader.exe --path "C:\Docs\Manual.pdf"
```

The `open` verb is optional:

```powershell
LaunchBox.Reader.exe open --path "C:\Docs\Manual.pdf"
```

You can also pass a bare path as the first non-option argument:

```powershell
LaunchBox.Reader.exe "C:\Docs\Manual.pdf"
```

Using `--path` is recommended for integrations because it is explicit and easier to read in logs.

## Help and Diagnostics

| Argument | Description |
| --- | --- |
| `--help`, `-help`, `-h`, `/help`, `/h`, `/?` | Show command-line help. |
| `--help-keys`, `-help-keys`, `--keys`, `-keys` | Show keyboard controls. |
| `--help-controller`, `-help-controller`, `--controller`, `-controller` | Show controller controls. |
| `--version`, `-version`, `-v`, `/version`, `/v` | Show reader version. |
| `--verbose-logging`, `--diagnostics` | Enable detailed diagnostic logging. |

Slash aliases are supported on Windows.

## Target Document

| Argument | Values | Description |
| --- | --- | --- |
| `--path`, `-path` | File or folder path | Document, archive, image, or image folder to open. |
| `--format`, `-format` | `pdf`, `epub`, `cbz`, `cbr`, `cb7`, `cbt`, `zip`, `rar`, `7z`, `images` | Optional format hint when a path is ambiguous. |
| `--document-title`, `-document-title` | Text | Title shown by the reader instead of the filename. |
| `--game-title`, `-game-title` | Text | Optional related item title for display integrations. |
| `--platform`, `-platform` | Text | Optional related category title for display integrations. |

## Startup Location

| Argument | Values | Description |
| --- | --- | --- |
| `--page`, `-page` | 1-based page number | Opens directly to a page. |
| `--progress`, `-progress` | `0` to `1` | Opens to a normalized reading position. |
| `--resume`, `-resume` | Flag | Restores saved reading position when available. |
| `--no-resume`, `-no-resume` | Flag | Ignores saved reading position for this launch. |

Resume is enabled by default unless disabled by settings or `--no-resume`.

## Window and Monitor Placement

| Argument | Values | Description |
| --- | --- | --- |
| `--fullscreen`, `-fullscreen` | Flag | Starts fullscreen. |
| `--launch-window-handle`, `--launch-hwnd`, `--owner-window-handle`, `--parent-window-handle` | Decimal or `0x` window handle | Opens on the same monitor as the calling window. |
| `--launch-point`, `-launch-point` | `x,y` | Opens on the monitor containing the supplied screen point. |
| `--launch-bounds`, `-launch-bounds` | `x,y,width,height` | Opens on the monitor nearest the supplied screen bounds. |
| `--return-focus`, `-return-focus` | Text hint | Stores a focus return hint for the caller. |

For most host applications, `--launch-window-handle` is the best option if you have access to your main window handle.

## Chrome and UI

| Argument | Values | Description |
| --- | --- | --- |
| `--hide-chrome`, `-hide-chrome` | Flag | Starts with minimal chrome. |
| `--show-chrome`, `-show-chrome` | Flag | Starts with full chrome visible. |
| `--theme`, `-theme` | `black`, `dark`, `light`, `sepia` | Sets reader theme for this launch. |

## Fixed-Layout Documents

Fixed-layout documents include PDFs, comics, image archives, image folders, and direct image files.

| Argument | Values | Description |
| --- | --- | --- |
| `--layout`, `-layout` | `single`, `spread`, `stacked` | Sets page layout. |
| `--fit`, `-fit` | `fit`, `width`, `height`, `free` | Sets initial zoom mode. |
| `--fixed-margin`, `-fixed-margin` | `none`, `small`, `medium`, `large` | Sets page margin. |
| `--stack-direction`, `-stack-direction` | `vertical`, `horizontal`, `v`, `h` | Sets stacked scroll direction. |
| `--reading-direction`, `--direction` | `ltr`, `left-to-right`, `rtl`, `right-to-left` | Sets reading direction. |
| `--page-turn`, `-page-turn` | `premium`, `simple`, `instant` | Sets page turn mode. |

Note: `simple` currently maps to the animated page turn mode.

## EPUB and Reflowable Reading

| Argument | Values | Description |
| --- | --- | --- |
| `--flow`, `-flow` | `paginated`, `continuous` | Sets EPUB reading flow. |
| `--epub-layout`, `-epub-layout` | `auto`, `single`, `spread` | Sets EPUB paginated layout. |
| `--margin`, `--epub-margin` | `small`, `medium`, `large`, `0`, `1`, `2` | Sets EPUB text margin. |
| `--font`, `--font-family`, `--book-font` | `serif`, `sans`, `sans-serif`, `mono`, `monospace` | Sets EPUB font family. |
| `--text-scale`, `--font-scale`, `--font-size` | `80` to `200`, optionally with `%` | Sets EPUB text scale percentage. |
| `--line-spacing`, `-line-spacing` | `tight`, `normal`, `relaxed`, `loose`, `0`, `1`, `2`, `3` | Sets EPUB line spacing. |
| `--night-mode`, `-night-mode` | Flag | Enables EPUB night-mode lighting. |
| `--no-night-mode`, `-no-night-mode` | Flag | Disables EPUB night-mode lighting. |

## Search

| Argument | Values | Description |
| --- | --- | --- |
| `--search`, `-search` | Text | Preloads a search query for searchable document types. |

## Exit Codes and Error Handling

The reader is primarily a GUI application. A successful `Process.Start` only means the process was created. It does not guarantee that the document was fully loaded.

For integration robustness:

- Validate the target path before launching.
- Use supported file extensions.
- Use `--verbose-logging` when diagnosing launch issues.
- Read logs from the reader data root if a user reports a failure.
