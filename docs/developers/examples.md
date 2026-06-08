# Integration Examples

These examples show practical ways to launch LaunchBox Reader from another application.

## C# Process Launch

Use `ProcessStartInfo.ArgumentList` so paths and titles are quoted safely.

```csharp
using System.Diagnostics;

var readerPath = @"C:\Tools\LaunchBox Reader\LaunchBox.Reader.exe";
var documentPath = @"D:\Manuals\Example Manual.pdf";

var startInfo = new ProcessStartInfo(readerPath)
{
    UseShellExecute = false,
    WorkingDirectory = Path.GetDirectoryName(readerPath)
};

startInfo.ArgumentList.Add("--path");
startInfo.ArgumentList.Add(documentPath);
startInfo.ArgumentList.Add("--document-title");
startInfo.ArgumentList.Add("Example Manual");
startInfo.ArgumentList.Add("--fullscreen");

Process.Start(startInfo);
```

## C# Launch on the Same Monitor

If your app has a window handle, pass it with `--launch-window-handle`.

```csharp
using System.Diagnostics;

var hwnd = mainWindowHandle.ToInt64();

var startInfo = new ProcessStartInfo(readerPath)
{
    UseShellExecute = false,
    WorkingDirectory = Path.GetDirectoryName(readerPath)
};

startInfo.ArgumentList.Add("--path");
startInfo.ArgumentList.Add(documentPath);
startInfo.ArgumentList.Add("--launch-window-handle");
startInfo.ArgumentList.Add($"0x{hwnd:X}");

Process.Start(startInfo);
```

## PowerShell

```powershell
& "C:\Tools\LaunchBox Reader\LaunchBox.Reader.exe" `
  --path "D:\Manuals\Example Manual.pdf" `
  --document-title "Example Manual" `
  --theme dark `
  --fullscreen
```

## Open Without Resuming

```powershell
LaunchBox.Reader.exe --path "C:\Docs\Manual.pdf" --no-resume --page 1
```

## Open an Image Folder

```powershell
LaunchBox.Reader.exe --path "D:\Scans\Manual Folder" --format images
```

## Open a Comic Archive

```powershell
LaunchBox.Reader.exe --path "D:\Comics\Issue 01.cbz" --layout single --fit fit
```

## Open an EPUB with Reading Preferences

```powershell
LaunchBox.Reader.exe `
  --path "D:\Books\Guide.epub" `
  --theme sepia `
  --flow paginated `
  --epub-layout auto `
  --font serif `
  --text-scale 110 `
  --line-spacing relaxed
```

## Use an App-Specific Data Root

Set `LAUNCHBOX_READER_DATA_ROOT` before launching if your app wants Reader data in an app-managed folder.

```csharp
var startInfo = new ProcessStartInfo(readerPath)
{
    UseShellExecute = false,
    WorkingDirectory = Path.GetDirectoryName(readerPath)
};

startInfo.Environment["LAUNCHBOX_READER_DATA_ROOT"] = @"D:\MyApp\ReaderData";
startInfo.ArgumentList.Add("--path");
startInfo.ArgumentList.Add(documentPath);

Process.Start(startInfo);
```

## Recommended Error Handling

Before launching:

- Confirm the reader executable exists.
- Confirm the document path exists.
- Prefer `ArgumentList` over manually building a quoted command string.
- Pass monitor placement information when launching from fullscreen apps.

After launching:

- Do not assume `Process.Start` means the document loaded successfully.
- Ask users for logs from the reader data root when diagnosing document-specific failures.
- Keep your integration tolerant of the reader being closed independently.

