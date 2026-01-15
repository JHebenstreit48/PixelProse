import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Export & Deploy",
      subpages: [
        {
          name: "Export Presets",
          path: "/godot/tools/export-and-deploy/export-presets"
        },
        {
          name: "Templates & Platforms",
          path: "/godot/tools/export-and-deploy/templates-and-platforms"
        }
      ]
    },
    {
      name: "CLI & Headless",
      subpages: [
        {
          name: "godot CLI Basics",
          path: "/godot/tools/cli-and-headless/godot-cli-basics"
        },
        {
          name: "Headless & Server",
          path: "/godot/tools/cli-and-headless/headless-and-server"
        }
      ]
    },
    {
      name: "Profiler & Debug",
      subpages: [
        {
          name: "Monitors & Profiler",
          path: "/godot/tools/profiler-and-debug/monitors-and-profiler"
        },
        {
          name: "Debugger & Breakpoints",
          path: "/godot/tools/profiler-and-debug/debugger-and-breakpoints"
        }
      ]
    },
    {
      name: "Extensions",
      subpages: [
        {
          name: "AssetLib & Plugins",
          path: "/godot/tools/extensions/assetlib-and-plugins"
        },
        {
          name: "GDExtension Setup",
          path: "/godot/tools/extensions/gdextension-setup"
        }
      ]
    }
  ]
};

export default Tools;