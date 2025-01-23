import { Subpage } from "@/Navigation/NavigationTypes";

const PythonShadersNavigation: Subpage = {
  name: "Python Shaders",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/shaders/python/overview" },
        { name: "Syntax", path: "/shaders/python/syntax" },
        { name: "Integration", path: "/shaders/python/integration" },
      ],
    },
    {
      name: "Applications",
      subpages: [
        { name: "Rendering Effects", path: "/shaders/python/applications/effects" },
        { name: "Volumetric Rendering", path: "/shaders/python/applications/volumetric" },
        { name: "Post-Processing Effects", path: "/shaders/python/applications/postprocessing" },
      ],
    },
    {
      name: "Optimization",
      subpages: [
        { name: "Performance Tips", path: "/shaders/python/optimization/performance-tips" },
        { name: "Debugging Techniques", path: "/shaders/python/optimization/debugging" },
        { name: "Integration Best Practices", path: "/shaders/python/optimization/integration" },
      ],
    },
  ],
};

export default PythonShadersNavigation;
