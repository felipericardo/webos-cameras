# webos-cameras

Camera viewer app for the rooted LG webOS TVs (homelab personal project): a 3x3 grid of the
house cameras from go2rtc, with one camera live at a time and full-screen viewing.

App id `tld.my.cameras`, title "Câmeras". Renamed from "Cam Test" (`tld.my.camtest`) on
2026-10-24, now that it's the final app id.

## How it works

- **Grid:** each tile shows a go2rtc snapshot (`frame.jpeg` of the `_sub` stream), refreshed
  continuously. The focused tile (blue border) plays live video of its `_sub` stream.
- **Full screen (OK):** live video of the main stream (no `_sub`); the last snapshot stays
  visible until the video starts. OK or Back returns to the grid.
- **Live video** is H.265/H.264 fMP4 from go2rtc's WebSocket (`/api/ws`, MSE), decoded by
  the TV's hardware. Constraints measured on Sala (webOS 4.x):
  - a web app can play only one video at a time;
  - the LG player keeps ~3 s of buffer;
  - seeking or `playbackRate` can't shorten it.

## Configure

```sh
cp app/config.example.js app/config.js
```

Set your go2rtc host and up to 9 stream names. `app/config.js` is git-ignored, and it is
packaged into the IPK on build.

## Build and install

Uses [webos-tools](https://github.com/felipericardo/webos-tools), checked out next to this repo.

```sh
python3 -I ../webos-tools/build_ipk.py app dist/tld.my.cameras_<version>_all.ipk
../webos-tools/install_ipk.sh <tv-ip> dist/tld.my.cameras_<version>_all.ipk --launch
```

Bump `version` in `app/appinfo.json` for every install. The TV must be rooted (Homebrew
Channel) with SSH as root.

## License

MIT, see [LICENSE](LICENSE).
