made by claude sonnet 4.6, orchestrated by me. for my own personal use- but i put it up for others to use too. you must have node.js installed to use it, then run npminstall.bat, then launch.vbs. only works on windows i think but it could work on linux if you tried

how claude describes it:

# Linework

A vector animation tool built for game developers. Think Aseprite, but for SVG — frame-by-frame animation with layers, tags, audio, and a timeline, all drawing in clean scalable vectors instead of pixels.

Runs as a single HTML file, or as a desktop app via Electron.

![Linework](preview.png)

---

## Features

**Drawing**
- Pen, polygon, line, rect, move, edit, and eraser tools
- Smooth bezier strokes, filled polygons, editable control points
- Snap to grid, connect to nearest endpoint
- Move and rotate selections, nudge with arrow keys

**Animation**
- Frame-by-frame timeline with layers
- Onion skinning (prev frame red, next frame cyan)
- Frame hold durations — right-click any frame to set how many ticks it holds
- Tags: named frame ranges with loop / play-once / ping-pong modes, per-tag FPS multiplier, and color coding

**Audio**
- Load audio tracks and position them on the timeline
- Playback syncs audio to the current frame
- Multiple tracks supported

**Canvas**
- Defined canvas size (e.g. 320×180) with a visible dashed border
- Everything exports relative to that canvas — consistent across all export types

**Export**
- PNG at 2× canvas size
- PNG sequence (one file per frame)
- WebM video with audio baked in
- SVG spritesheet — each frame as a named `<symbol>`, referenceable with `<use href="sheet.svg#frame_0001"/>`
- Plain SVG of the current frame

**File format**
- `.linework` — a self-contained JSON file storing all layers, frames, tags, audio (as base64), and canvas settings
- Saves and loads everything, including audio, with no external dependencies

**UI**
- Warm dark theme
- Palette with persistent swatches, reusable symbols
- Inspector panel for editing selected stroke color, width, and opacity
- Background color support (baked into exports)

---

## Running

**As a web app** (requires a local server for PNG export):
```
python -m http.server 8000
```
Then open `http://localhost:8000/linework-web.html`.

**As an Electron desktop app** (recommended):
```
npm install
npm start
```

To launch without a terminal window on Windows, use `launch.vbs`.

---

## Credits

Built by [Radi](https://github.com/radishcatish) and [Claude](https://claude.ai).  
The logo is Claude's — the code is ours.
