import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/godot/basics/fundamentals/introduction"
        },
        {
          name: "Editor & Layout",
          path: "/godot/basics/fundamentals/editor-and-layout"
        }
      ]
    },
    {
      name: "Scenes & Nodes",
      subpages: [
        {
          name: "Node System",
          path: "/godot/basics/scenes-and-nodes/node-system"
        },
        {
          name: "Signals & Events",
          path: "/godot/basics/scenes-and-nodes/signals-and-events"
        }
      ]
    },
    {
      name: "Scripting",
      subpages: [
        {
          name: "GDScript Basics",
          path: "/godot/basics/scripting/gdscript-basics"
        },
        {
          name: "C# Basics",
          path: "/godot/basics/scripting/csharp-basics"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/godot/basics/project-setup/create-and-configure"
        },
        {
          name: "Folders & Assets",
          path: "/godot/basics/project-setup/folders-and-assets"
        }
      ]
    },
    {
      name: "2D Essentials",
      subpages: [
        {
          name: "Tilemaps & Sprites",
          path: "/godot/basics/2d-essentials/tilemaps-and-sprites"
        },
        {
          name: "Input & Camera2D",
          path: "/godot/basics/2d-essentials/input-and-camera2d"
        }
      ]
    },
    {
      name: "UI Basics",
      subpages: [
        {
          name: "Control Nodes",
          path: "/godot/basics/ui-basics/control-nodes"
        },
        {
          name: "Layout & Anchors",
          path: "/godot/basics/ui-basics/layout-and-anchors"
        }
      ]
    }
  ]
};

export default Basics;