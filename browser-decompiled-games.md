# Browser-playable ports of classic games

Open each **Play** link in a desktop browser first. Bring only game files you are legally allowed to use. Keep browser delivery, decompilation, source release, clean-room engine work, and reconstruction clearly distinguished. Treat a working page as availability evidence—not a completed playtest.

Check these nine browser entry points on **2026-10-01**. The checks confirmed page responses only. Most require your own game data.

## Browser-playable picks

- **GTA III — re3 WebAssembly.** [Play](https://wasmarcade.com/gta3). Use the re3 reverse-engineered game code in a browser build. [Project details](https://wasmarcade.com/gta3) identify the browser port and controls. Treat the hosted service and game-file requirements as subject to change.
- **GTA: Vice City — reVC Web.** [Play](https://revc.wasm.ltd/). Bring your own installed game; the page reads its data locally. This is a WebAssembly browser port of the reVC decompilation, not a new decompilation. Review the port's [source and reuse notice](https://github.com/origami-ltd/wasm-revc).
- **Command & Conquer: Generals / Zero Hour — GeneralsX WASM.** [Play](https://generals.wasm.ltd/). Run the browser build of the source-released game engine and provide compatible game data.
- **Diddy Kong Racing — Golden Balloon.** [Play](https://akratch.github.io/golden-balloon/). Use a current WebGPU browser and provide a supported, legally acquired ROM. The port builds on the game's community decompilation; inspect the [source](https://github.com/akratch/goldenballoon).
- **The Legend of Zelda: Ocarina of Time — Prelude.** [Play](https://preludeoflight.com/play/). Import your own Ocarina of Time ROM or Ship of Harkinian `.o2r`; the browser editor can launch the game with your scene changes.
- **The Elder Scrolls III: Morrowind — OpenMW Web.** [Play](https://morrowind.virtastic.app/). Try the included example world without game data, or supply your own Morrowind files for the full game. The browser build is OpenMW, an open reimplementation, not a decompilation. Use desktop Chromium.
- **Diablo — DiabloWeb.** [Play](https://d07riv.github.io/diabloweb/). Run the DevilutionX-based browser port. Supply `DIABDAT.MPQ`; the project says the shareware data can be used.
- **Tomb Raider — OpenLara.** [Play the WebGL demo](http://xproger.info/projects/OpenLara/). Try the included demo level. The upstream demo still uses legacy HTTP; use the [OpenLara source](https://github.com/XProger/OpenLara) for project details.
- **Half-Life / Counter-Strike — WebXash.** [Play](https://x8bitrain.github.io/webXash/). Supply compatible game assets. This is an adjacent browser source-port project, not a game decompilation.

## Interesting, but not a verified live play link

- **GTA: San Andreas — OpenSA.** The creator describes a browser-based, from-scratch RenderWare-compatible engine—not a GTA port or decompilation—and requires your own game files. The creator's [project write-up](https://medium.com/@gooddev.sergey/i-ran-gta-san-andreas-on-my-own-engine-in-the-browser-solo-with-claude-in-3-weeks-d77947dcc3b2) links the demo at [opensa.cc](https://opensa.cc) and source at [GitHub](https://github.com/AlexSergey/opensa). Both links failed checks on 2026-10-01: the demo failed TLS certificate validation and GitHub returned 404. Do not treat either as currently usable until they work again.
- **Halo: Combat Evolved — Halo Mobile.** The [source project](https://github.com/OMG-Guest/Halo-Mobile) describes a browser port based on Halo CE decompilation, but its README gives build-and-self-host steps rather than a hosted Play URL. Import only authorized Halo data; do not mistake the GitHub source link for a live game.
- **GoldenEye 007 — MGB64.** Leave this out of active picks: its own [README](https://github.com/akratch/mgb64) says the hosted web demo was taken down and the project was discontinued.

## Find more

- Browse [Awesome Browser Game Ports](https://github.com/bitburner/Awesome-Browser-Game-Ports) for source ports, WebAssembly builds, and browser emulators. Verify individual projects and data requirements before recommending them.
- Browse [Decomp Games — Decompilations](https://decompgames.com/collections/decompilations/) for the wider decompilation ecosystem. Its site labels itself a development preview; do not treat every directory entry as a browser-playable game.
- Prefer an upstream Play page and README. Confirm whether each link loads the actual game, a tech demo, an emulator shell, or only an engine launcher.
