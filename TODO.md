# Portfolio website - open items (2026-09-28)

Preview: `python -m http.server 8765` in this folder, then http://127.0.0.1:8765

## Needs Nikita
- Tagline (hero), 2-3 bio lines (About), email, YouTube + Instagram links.
- Bad Omens: song title; confirm "unofficial fan music video" wording; YouTube link after the release.
- Helgnar dragon cinematic: your role line (direction / camera / lighting / edit?). The site embeds YouTube 9kDAbI6SV2Y ("Duel of the Dragon Riders") - confirm it is the right video.
- Alligatorz (BraAus) job videos are private on Drive - share the two REDO files or copy them into `_source/`.
- Character animation card titles/clients (current names are guesses).
- YouTube + Instagram links in Contact are still `href="#"`.
- Custom domain? If yes, replace `https://budnik96.github.io/portfolio-website/` in index.html (canonical, og:url, og:image), sitemap.xml, robots.txt, and `/portfolio-website/` in 404.html.

## Unused videos found in D:\MotionDesign (candidates - pick what to show)
- Blender/1C Demo Reel: DemoReel_Animations_full.mp4, Demoreel_Dinoland0001-15815.mp4
- Blender/Blinkov_Rivals/Final_Render: Blinkov_DR_Final_v3.mp4 (+ AI version)
- Unreal/BadDecision_Course: Samurai_Fight_4k.mp4, Interiour_Seq_4k_Full.mp4, FinalRender_v4(NoSub).mp4
- Unreal/DragonFight/Prolog_render: Prolog_4k25.mov, DragonFly_prolog_v2.mp4
- Studia54/Studia54_Reels.mp4; StudiaF_Test: Liquid_Animation_final.mov, LogoAnimation_final_v2.mov
- KiS_Test: NATO_Poster_anim.mp4, Bricks_test_anim_.mp4; Banner_TG/Banner_TG_v3_NoShake.mp4
- MusicClip_ArtificialSuicide (scene renders), SmeQubes animatic, Blender/Practice/SomeCubes, Softintermob/Dinoland Sheep_Jump
- AE/Agraba (2020 UI animations)

## Later
- Host on GitHub Pages (Nikita clicks the settings, see PR description). Repo is private: Pages on a free plan needs it public -
  note CLAUDE.md and TODO.md would then be public too.
- Swap Behance-hosted covers for local copies before launch (then give them real width/height).
- New gallery stills: add a 720px-wide copy in `assets/img/sm/` and use it via `srcset` like the others.
