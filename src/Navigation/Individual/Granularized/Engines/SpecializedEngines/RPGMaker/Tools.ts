import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Plugin Manager",
      subpages: [
        {
          name: "Install & Update",
          path: "/rpg-maker/tools/plugin-manager/install-and-update"
        },
        {
          name: "Compatibility & Order",
          path: "/rpg-maker/tools/plugin-manager/compatibility-and-order"
        }
      ]
    },
    {
      name: "Playtest & Debug",
      subpages: [
        {
          name: "Debug Menu & Switches",
          path: "/rpg-maker/tools/playtest-and-debug/debug-menu-and-switches"
        },
        {
          name: "Logs & Tracing",
          path: "/rpg-maker/tools/playtest-and-debug/logs-and-tracing"
        }
      ]
    },
    {
      name: "Build & Export",
      subpages: [
        {
          name: "Desktop Targets",
          path: "/rpg-maker/tools/build-and-export/desktop-targets"
        },
        {
          name: "Mobile & Web",
          path: "/rpg-maker/tools/build-and-export/mobile-and-web"
        }
      ]
    },
    {
      name: "Asset Pipeline",
      subpages: [
        {
          name: "Tilesets & Animations",
          path: "/rpg-maker/tools/asset-pipeline/tilesets-and-animations"
        },
        {
          name: "Effekseer & Spritesheets",
          path: "/rpg-maker/tools/asset-pipeline/effekseer-and-spritesheets"
        }
      ]
    },
    {
      name: "Marketplace & DLC",
      subpages: [
        {
          name: "Asset Packs",
          path: "/rpg-maker/tools/marketplace-and-dlc/asset-packs"
        },
        {
          name: "Licensing & Credits",
          path: "/rpg-maker/tools/marketplace-and-dlc/licensing-and-credits"
        }
      ]
    }
  ]
};

export default Tools;