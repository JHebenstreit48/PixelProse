import { Subpage } from "@/Navigation/NavigationTypes";

const GlobalIlluminationNavigation: Subpage = {
  name: "Global Illumination",
  subpages: [
    {
      name: "Introduction to GI",
      path: "/graphics/gi/intro",
    },
    {
      name: "Baked GI",
      path: "/graphics/gi/baked",
    },
    {
      name: "Real-Time GI",
      path: "/graphics/gi/realtime",
    },
    {
      name: "Performance",
      path: "/graphics/gi/performance",
    },
  ],
};

export default GlobalIlluminationNavigation;
