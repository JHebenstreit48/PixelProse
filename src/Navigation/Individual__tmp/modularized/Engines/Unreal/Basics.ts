import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/unreal/basics/fundamentals/introduction"
        },
        {
          name: "Editor & Layout",
          path: "/unreal/basics/fundamentals/editor-and-layout"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/unreal/basics/project-setup/create-and-configure"
        },
        {
          name: "Folders & Assets",
          path: "/unreal/basics/project-setup/folders-and-assets"
        }
      ]
    },
    {
      name: "Gameplay Framework",
      subpages: [
        {
          name: "Actors & Components",
          path: "/unreal/basics/gameplay-framework/actors-and-components"
        },
        {
          name: "Pawns & Controllers",
          path: "/unreal/basics/gameplay-framework/pawns-and-controllers"
        }
      ]
    },
    {
      name: "Blueprints",
      subpages: [
        {
          name: "Blueprint Basics",
          path: "/unreal/basics/blueprints/blueprint-basics"
        },
        {
          name: "BP & C++ Bridge",
          path: "/unreal/basics/blueprints/bp-and-cpp-bridge"
        }
      ]
    },
    {
      name: "Input & Camera",
      subpages: [
        {
          name: "Input Mapping",
          path: "/unreal/basics/input-and-camera/input-mapping"
        },
        {
          name: "Camera & SpringArm",
          path: "/unreal/basics/input-and-camera/camera-and-springarm"
        }
      ]
    },
    {
      name: "UI (UMG)",
      subpages: [
        {
          name: "UMG Basics",
          path: "/unreal/basics/ui-umg/umg-basics"
        },
        {
          name: "Widget Blueprints",
          path: "/unreal/basics/ui-umg/widget-blueprints"
        },
        {
          name: "Responsive UI",
          path: "/unreal/basics/ui-umg/responsive-ui"
        }
      ]
    }
  ]
};

export default Basics;