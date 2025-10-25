import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/construct/basics/fundamentals/introduction"
        },
        {
          name: "Workspace & Panels",
          path: "/construct/basics/fundamentals/workspace-and-panels"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/construct/basics/project-setup/create-and-configure"
        },
        {
          name: "Assets & Folders",
          path: "/construct/basics/project-setup/assets-and-folders"
        }
      ]
    },
    {
      name: "Event System",
      subpages: [
        {
          name: "Event Sheets",
          path: "/construct/basics/event-system/event-sheets"
        },
        {
          name: "Conditions & Actions",
          path: "/construct/basics/event-system/conditions-and-actions"
        }
      ]
    },
    {
      name: "Objects & Behaviors",
      subpages: [
        {
          name: "Sprites & Instances",
          path: "/construct/basics/objects-and-behaviors/sprites-and-instances"
        },
        {
          name: "Behaviors & Instance Vars",
          path: "/construct/basics/objects-and-behaviors/behaviors-and-instance-vars"
        }
      ]
    },
    {
      name: "Layouts & Layers",
      subpages: [
        {
          name: "Layouts & Views",
          path: "/construct/basics/layouts-and-layers/layouts-and-views"
        },
        {
          name: "Layers & Parallax",
          path: "/construct/basics/layouts-and-layers/layers-and-parallax"
        }
      ]
    },
    {
      name: "Animation & Audio",
      subpages: [
        {
          name: "Sprite Animations",
          path: "/construct/basics/animation-and-audio/sprite-animations"
        },
        {
          name: "Audio Basics",
          path: "/construct/basics/animation-and-audio/audio-basics"
        }
      ]
    }
  ]
};

export default Basics;