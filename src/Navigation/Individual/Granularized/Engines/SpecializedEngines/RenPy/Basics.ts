import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/renpy/basics/fundamentals/introduction"
        },
        {
          name: "Launcher & Workflow",
          path: "/renpy/basics/fundamentals/launcher-and-workflow"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/renpy/basics/project-setup/create-and-configure"
        },
        {
          name: "Files & Folders",
          path: "/renpy/basics/project-setup/files-and-folders"
        }
      ]
    },
    {
      name: "Script Basics",
      subpages: [
        {
          name: "Dialogue & Say",
          path: "/renpy/basics/script-basics/dialogue-and-say"
        },
        {
          name: "Choices & Menus",
          path: "/renpy/basics/script-basics/choices-and-menus"
        }
      ]
    },
    {
      name: "Flow Control",
      subpages: [
        {
          name: "Labels & Jumps",
          path: "/renpy/basics/flow-control/labels-and-jumps"
        },
        {
          name: "Variables & If/Else",
          path: "/renpy/basics/flow-control/variables-and-if-else"
        }
      ]
    },
    {
      name: "Characters & Assets",
      subpages: [
        {
          name: "Characters & Names",
          path: "/renpy/basics/characters-and-assets/characters-and-names"
        },
        {
          name: "Images & Displayables",
          path: "/renpy/basics/characters-and-assets/images-and-displayables"
        }
      ]
    },
    {
      name: "Audio Basics",
      subpages: [
        {
          name: "Music & Sound",
          path: "/renpy/basics/audio-basics/music-and-sound"
        },
        {
          name: "Voice & Channels",
          path: "/renpy/basics/audio-basics/voice-and-channels"
        }
      ]
    },
    {
      name: "Saves & State",
      subpages: [
        {
          name: "Save/Load",
          path: "/renpy/basics/saves-and-state/save-and-load"
        },
        {
          name: "Persistent Data",
          path: "/renpy/basics/saves-and-state/persistent-data"
        }
      ]
    }
  ]
};

export default Basics;