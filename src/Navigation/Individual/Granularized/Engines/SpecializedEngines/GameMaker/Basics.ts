import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/gamemaker/basics/fundamentals/introduction"
        },
        {
          name: "Editor & Layout",
          path: "/gamemaker/basics/fundamentals/editor-and-layout"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/gamemaker/basics/project-setup/create-and-configure"
        },
        {
          name: "Assets & Folders",
          path: "/gamemaker/basics/project-setup/assets-and-folders"
        }
      ]
    },
    {
      name: "Sprites & Animation",
      subpages: [
        {
          name: "Import & Frames",
          path: "/gamemaker/basics/sprites-and-animation/import-and-frames"
        },
        {
          name: "Origins & Collision Masks",
          path: "/gamemaker/basics/sprites-and-animation/origins-and-collision-masks"
        }
      ]
    },
    {
      name: "Objects & Events",
      subpages: [
        {
          name: "Create/Step/Draw",
          path: "/gamemaker/basics/objects-and-events/create-step-draw"
        },
        {
          name: "Alarms & State",
          path: "/gamemaker/basics/objects-and-events/alarms-and-state"
        }
      ]
    },
    {
      name: "Rooms & Layers",
      subpages: [
        {
          name: "Layouts & Layers",
          path: "/gamemaker/basics/rooms-and-layers/layouts-and-layers"
        },
        {
          name: "Instances & Depth",
          path: "/gamemaker/basics/rooms-and-layers/instances-and-depth"
        }
      ]
    },
    {
      name: "GML Basics",
      subpages: [
        {
          name: "Syntax & Variables",
          path: "/gamemaker/basics/gml-basics/syntax-and-variables"
        },
        {
          name: "Scripts & Functions",
          path: "/gamemaker/basics/gml-basics/scripts-and-functions"
        }
      ]
    },
    {
      name: "Visual Scripting",
      subpages: [
        {
          name: "Drag & Drop",
          path: "/gamemaker/basics/visual-scripting/drag-and-drop"
        },
        {
          name: "Convert to GML",
          path: "/gamemaker/basics/visual-scripting/convert-to-gml"
        }
      ]
    },
    {
      name: "Audio Basics",
      subpages: [
        {
          name: "Sounds & Music",
          path: "/gamemaker/basics/audio-basics/sounds-and-music"
        },
        {
          name: "Mixers & Effects",
          path: "/gamemaker/basics/audio-basics/mixers-and-effects"
        }
      ]
    }
  ]
};

export default Basics;