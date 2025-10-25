import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/cry/basics/fundamentals/introduction"
        },
        {
          name: "Editor & Layout",
          path: "/cry/basics/fundamentals/editor-and-layout"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/cry/basics/project-setup/create-and-configure"
        },
        {
          name: "Folders & Assets",
          path: "/cry/basics/project-setup/folders-and-assets"
        }
      ]
    },
    {
      name: "Entities & Components",
      subpages: [
        {
          name: "Entities & Components",
          path: "/cry/basics/entities-and-components/entities-and-components"
        },
        {
          name: "Entity Events",
          path: "/cry/basics/entities-and-components/entity-events"
        }
      ]
    },
    {
      name: "Scripting",
      subpages: [
        {
          name: "Flow Graph (Visual)",
          path: "/cry/basics/scripting/flow-graph-visual"
        },
        {
          name: "Game Code Integration",
          path: "/cry/basics/scripting/game-code-integration"
        }
      ]
    },
    {
      name: "Rendering Basics",
      subpages: [
        {
          name: "Materials",
          path: "/cry/basics/rendering-basics/materials"
        },
        {
          name: "Lighting",
          path: "/cry/basics/rendering-basics/lighting"
        }
      ]
    },
    {
      name: "Physics Basics",
      subpages: [
        {
          name: "Rigid Bodies",
          path: "/cry/basics/physics-basics/rigid-bodies"
        },
        {
          name: "Colliders & Constraints",
          path: "/cry/basics/physics-basics/colliders-and-constraints"
        }
      ]
    },
    {
      name: "UI",
      subpages: [
        {
          name: "UI Overview",
          path: "/cry/basics/ui/ui-overview"
        },
        {
          name: "Actions & Events",
          path: "/cry/basics/ui/actions-and-events"
        }
      ]
    }
  ]
};

export default Basics;