import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Screen Language",
      subpages: [
        {
          name: "Widgets & Layout",
          path: "/renpy/advanced/screen-language/widgets-and-layout"
        },
        {
          name: "Actions & Dynamic Screens",
          path: "/renpy/advanced/screen-language/actions-and-dynamic-screens"
        }
      ]
    },
    {
      name: "ATL & Animation",
      subpages: [
        {
          name: "ATL Basics",
          path: "/renpy/advanced/atl-and-animation/atl-basics"
        },
        {
          name: "Transforms & Transitions",
          path: "/renpy/advanced/atl-and-animation/transforms-and-transitions"
        }
      ]
    },
    {
      name: "GUI Customization",
      subpages: [
        {
          name: "Theme & options.rpy",
          path: "/renpy/advanced/gui-customization/theme-and-options"
        },
        {
          name: "Styles & Skinning",
          path: "/renpy/advanced/gui-customization/styles-and-skinning"
        }
      ]
    },
    {
      name: "Python Integration",
      subpages: [
        {
          name: "Python Blocks & Stores",
          path: "/renpy/advanced/python-integration/python-blocks-and-stores"
        },
        {
          name: "Minigames & Loops",
          path: "/renpy/advanced/python-integration/minigames-and-loops"
        }
      ]
    },
    {
      name: "Media & Effects",
      subpages: [
        {
          name: "Video & Movie",
          path: "/renpy/advanced/media-and-effects/video-and-movie"
        },
        {
          name: "Live2D & Extras",
          path: "/renpy/advanced/media-and-effects/live2d-and-extras"
        }
      ]
    },
    {
      name: "Localization & Access",
      subpages: [
        {
          name: "Translations Workflow",
          path: "/renpy/advanced/localization-and-access/translations-workflow"
        },
        {
          name: "Accessibility & Fonts",
          path: "/renpy/advanced/localization-and-access/accessibility-and-fonts"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Predict & Cache",
          path: "/renpy/advanced/performance/predict-and-cache"
        },
        {
          name: "Profiling & Lint",
          path: "/renpy/advanced/performance/profiling-and-lint"
        }
      ]
    }
  ]
};

export default Advanced;