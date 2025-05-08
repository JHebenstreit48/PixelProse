import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityAudioNavigation: Subpage = {
  name: "Audio",
  subpages: [
    {
      name: "Audio System",
      subpages: [
        { name: "Audio Sources", path: "/unity/audio/audio-sources" },
        { name: "Audio Mixers", path: "/unity/audio/audio-mixers" }
      ]
    },
    {
      name: "Advanced Audio",
      subpages: [
        { name: "Spatial Audio", path: "/unity/audio/spatial-audio" },
        { name: "Audio Effects", path: "/unity/audio/audio-effects" }
      ]
    }
  ]
};

export default UnityAudioNavigation;
