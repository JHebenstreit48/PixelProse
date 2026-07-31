import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Plugins (Dev)",
      subpages: [
        {
          name: "Core & Order",
          path: "/rpg-maker/advanced/plugins-dev/core-and-order"
        },
        {
          name: "Writing Plugins",
          path: "/rpg-maker/advanced/plugins-dev/writing-plugins"
        }
      ]
    },
    {
      name: "Scripting",
      subpages: [
        {
          name: "Script Calls",
          path: "/rpg-maker/advanced/scripting/script-calls"
        },
        {
          name: "Scenes & Windows",
          path: "/rpg-maker/advanced/scripting/scenes-and-windows"
        }
      ]
    },
    {
      name: "Animations & FX",
      subpages: [
        {
          name: "Effekseer Basics",
          path: "/rpg-maker/advanced/animations-and-fx/effekseer-basics"
        },
        {
          name: "Particles & Motion",
          path: "/rpg-maker/advanced/animations-and-fx/particles-and-motion"
        }
      ]
    },
    {
      name: "Data & Saves",
      subpages: [
        {
          name: "Variables & Persistence",
          path: "/rpg-maker/advanced/data-and-saves/variables-and-persistence"
        },
        {
          name: "Save Structure & Slots",
          path: "/rpg-maker/advanced/data-and-saves/save-structure-and-slots"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Maps & Events",
          path: "/rpg-maker/advanced/performance/maps-and-events"
        },
        {
          name: "Assets & Preload",
          path: "/rpg-maker/advanced/performance/assets-and-preload"
        }
      ]
    }
  ]
};

export default Advanced;