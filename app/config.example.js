// Copy to config.js (git-ignored) and fill in your own values.
window.CAMERAS_CONFIG = {
  // go2rtc host, reached over HTTPS / WSS.
  go2rtcHost: "go2rtc.example.com",
  // Up to 9 go2rtc stream names for the grid, ending in "_sub". Full screen uses the same name
  // without "_sub" (the main stream). The tile label is the name without "_sub".
  cameras: [
    "front_door_sub", "driveway_sub", "garden_sub",
    "backyard_sub", "garage_sub", "side_gate_sub",
    "living_room_sub", "kitchen_sub", "utility_room_sub"
  ]
};
