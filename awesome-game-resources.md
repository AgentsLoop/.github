# Awesome Game Resources

Find game assets, visual effects, sound effects, music, and production tools here. Start with a matching art style and target engine. Check the original item license before importing or redistributing a download.

Use the primary links below; treat **2026-09-27** as the verification date for every entry. Recheck prices, access requirements, engine versions, and licenses before release. Keep these resources separate from the playable games in [games.json](games.json).

## Start here

- Prototype quickly with [Kenney](https://kenney.nl/assets).
- Find stylized 3D characters and environments at [Quaternius](https://quaternius.com/).
- Find realistic materials, models, and lighting at [Poly Haven](https://polyhaven.com/) and [ambientCG](https://ambientcg.com/).
- Search specialist packs on [itch.io](https://itch.io/game-assets).
- Build particles with [Effekseer](https://effekseer.github.io/en/); generate arcade sounds with [jfxr](https://jfxr.frozenfractal.com/).

## Search assets and marketplaces

| Resource | Use it to | Check access and rights |
| --- | --- | --- |
| [itch.io game assets](https://itch.io/game-assets) | Filter sprites, tilesets, UI, textures, audio, and fonts by style, format, and price. | Choose free or paid packs; read each creator's license rather than treating a free download as unrestricted. |
| [OpenGameArt](https://opengameart.org/) | Search community 2D art, 3D art, textures, music, and sound effects. | Read each item's license and credit requirements; preserve attribution and share-alike terms where applicable. |
| [Fab](https://www.fab.com/) | Search 3D models, materials, environments, animations, and engine-ready packs. | Check the listing's license, compatible engine versions, file formats, and checkout requirements. |

## 2D, 3D, textures, and animation

| Resource | Use it to | Check access and rights |
| --- | --- | --- |
| [Kenney assets](https://kenney.nl/assets) | Download consistent 2D, 3D, UI, pixel-art, texture, and audio packs. | Use asset-page downloads under CC0; retain the included license. Verify details in [Kenney's FAQ](https://kenney.nl/support). |
| [Quaternius](https://quaternius.com/) | Find low-poly environments, props, rigged characters, and animation libraries. | Check the specific pack and acquisition terms: the [current QAL](https://quaternius.com/license.html) restricts standalone redistribution, while the [FAQ](https://quaternius.com/faq.html) and some pack pages still state CC0. Resolve conflicting terms before use. |
| [Poly Haven](https://polyhaven.com/) | Find HDRIs, PBR textures, and realistic 3D models. | Use its CC0 assets; download without an account. Choose resolutions suitable for your runtime. |
| [ambientCG](https://ambientcg.com/) | Find PBR materials, HDRIs, and models for environment work. | Use CC0 assets; verify coverage in the [license documentation](https://docs.ambientcg.com/license/). |
| [Mixamo](https://www.mixamo.com/) | Auto-rig humanoid characters and browse character animations. | Sign in with an Adobe ID when downloading. Check the [official FAQ](https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html) for usage and technical limits. |
| [Game-icons.net](https://game-icons.net/) | Find and customize SVG or PNG icons for skills, inventory, and menus. | Credit the original author under CC BY 3.0; follow the [attribution guidance](https://game-icons.net/about.html). |
| [Lospec palettes](https://lospec.com/palette-list) | Search pixel-art palettes by color count and tags; export a palette into your editor. | Check the palette's page; do not assume example artwork is included for reuse. |

## VFX, particles, and shaders

| Resource | Use it to | Check access and rights |
| --- | --- | --- |
| [Kenney Particle Pack](https://kenney.nl/assets/particle-pack) | Start with particle textures for sparks, smoke, glows, and impact effects. | Use the pack under its stated CC0 license. |
| [itch.io VFX](https://itch.io/game-assets/tag-vfx) | Find animated spell effects, explosions, flipbooks, and engine-specific VFX packs. | Filter by engine and price; verify the individual pack's license and required renderer. |
| [Effekseer](https://effekseer.github.io/en/) | Author particle effects and export 2D animations or integrate 3D effects through a runtime. | Use the free open-source editor; check runtime support for your engine and platform. |
| [Effekseer sample effects](https://effekseer.github.io/en/contribute.html) | Start from contributed effects rather than rebuilding every effect from scratch. | Distinguish current CC0 samples from the older samples, whose stated license limits playback to Effekseer. Read the bundled terms. |
| [Godot Shaders](https://godotshaders.com/) | Search community shader examples for water, outlines, lighting, and post-processing. | Check each submission's license, Godot version, and renderer compatibility. |

## Sound effects and music

| Resource | Use it to | Check access and rights |
| --- | --- | --- |
| [Freesound](https://freesound.org/) | Search recorded ambience, impacts, Foley, and other sound effects. | Register and log in to download. Check the [FAQ](https://freesound.org/help/faq/) and sound's license; distinguish CC0, attribution, and noncommercial entries. |
| [jfxr](https://jfxr.frozenfractal.com/) | Generate and tune retro game sounds in the browser. | Export your sound and retain its settings; inspect project terms before bundling the tool itself. |
| [Bfxr](https://www.bfxr.net/) | Generate arcade jumps, lasers, pickups, and explosions in the browser; export WAV files. | Distinguish generated audio from the [tool's MIT license](https://github.com/increpare/bfxr2); save the settings for later edits. |
| [Incompetech](https://incompetech.com/music/royalty-free/licenses/) | Find music and choose an appropriate licensing route. | Follow the stated attribution license or purchase a suitable license; keep the track's credit text. |

## Create, pack, and integrate assets

| Resource | Use it to | Check access and rights |
| --- | --- | --- |
| [Piskel](https://www.piskelapp.com/) | Draw pixel sprites and preview frame animation in a free online editor. | Export your work; check the editor's supported export formats before building a pipeline. |
| [Tiled](https://www.mapeditor.org/) | Assemble tile maps and object layers for 2D levels. | Match the exported map format to your engine's loader. Keep tileset rights separate from the editor license. |
| [TexturePacker](https://www.codeandweb.com/texturepacker) | Pack sprites into texture atlases and export engine-specific metadata. | Compare available licensing options and required features before purchasing. |

## Search effectively

1. Specify the asset, style, and format: `low-poly rigged knight glTF`, `pixel-art explosion spritesheet`, or `seamless stone PBR`.
2. Add your engine and version when searching shaders or VFX: `Godot 4 water shader` or `Unity URP impact effect`.
3. Filter licensing before downloading; inspect the original item page rather than relying on a search snippet.
4. Match scale, palette, perspective, texel density, and animation conventions across packs.
5. Test one asset in a small scene before importing an entire library.
6. Record the source URL, author, license, version, download date, and required credit in your project.
7. Check polygon count, texture memory, draw calls, audio size, and particle overdraw on your target device.

## Maintain this list

- Add direct creator, catalog, or official tool links with a concrete use case and verification date.
- Separate downloadable assets, asset-search catalogs, and authoring tools.
- Preserve per-item license caveats; avoid blanket commercial-use claims for marketplaces.
- Browse [AI game generators](ai-game-generators.md) for prompt-to-game systems and [game collections](awesomelists.md) for playable-game discovery.
