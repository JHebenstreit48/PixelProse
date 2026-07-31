import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Launcher & Utilities",
      subpages: [
        {
          name: "Projects & Updates",
          path: "/renpy/tools/launcher-and-utilities/projects-and-updates"
        },
        {
          name: "Lint & Image Tools",
          path: "/renpy/tools/launcher-and-utilities/lint-and-image-tools"
        }
      ]
    },
    {
      name: "Build & Export",
      subpages: [
        {
          name: "Desktop Targets",
          path: "/renpy/tools/build-and-export/desktop-targets"
        },
        {
          name: "Android Build & Signing",
          path: "/renpy/tools/build-and-export/android-build-and-signing"
        }
      ]
    },
    {
      name: "Web Export",
      subpages: [
        {
          name: "Ren'Py Web Basics",
          path: "/renpy/tools/web-export/renpy-web-basics"
        },
        {
          name: "Limits & Assets",
          path: "/renpy/tools/web-export/limits-and-assets"
        }
      ]
    },
    {
      name: "Localization Tools",
      subpages: [
        {
          name: "Extract & Generate",
          path: "/renpy/tools/localization-tools/extract-and-generate"
        },
        {
          name: "Review & Merge",
          path: "/renpy/tools/localization-tools/review-and-merge"
        }
      ]
    }
  ]
};

export default Tools;