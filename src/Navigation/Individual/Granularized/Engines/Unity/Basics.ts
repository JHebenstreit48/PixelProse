import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/unity/basics/fundamentals/introduction"
        },
        {
          name: "Editor & Layout",
          path: "/unity/basics/fundamentals/editor-and-layout"
        }
      ]
    },
    {
      name: "Scenes & Objects",
      subpages: [
        {
          name: "GameObjects & Components",
          path: "/unity/basics/scenes-and-objects/gameobjects-and-components"
        },
        {
          name: "Scene Management",
          path: "/unity/basics/scenes-and-objects/scene-management"
        }
      ]
    },
    {
      name: "Scripting",
      subpages: [
        {
          name: "Lifecycle & MonoBehaviours",
          path: "/unity/basics/scripting/lifecycle-and-monobehaviours"
        },
        {
          name: "ScriptableObjects",
          path: "/unity/basics/scripting/scriptableobjects"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/unity/basics/project-setup/create-and-configure"
        },
        {
          name: "Folders & Assets",
          path: "/unity/basics/project-setup/folders-and-assets"
        }
      ]
    },
    {
      name: "Input & Camera",
      subpages: [
        {
          name: "Input System",
          path: "/unity/basics/input-and-camera/input-system"
        },
        {
          name: "Camera & Cinemachine",
          path: "/unity/basics/input-and-camera/camera-and-cinemachine"
        }
      ]
    },
    {
      name: "UI",
      subpages: [
        {
          name: "Canvas & Layout",
          path: "/unity/basics/ui/canvas-and-layout"
        },
        {
          name: "UI Elements",
          path: "/unity/basics/ui/ui-elements"
        },
        {
          name: "Animation & Transitions",
          path: "/unity/basics/ui/animation-and-transitions"
        },
        {
          name: "Themes & Styling",
          path: "/unity/basics/ui/themes-and-styling"
        }
      ]
    }
  ]
};

export default Basics;