import { Subpage } from "@/Navigation/NavigationTypes";

const PythonShadersNavigation: Subpage = {
  name: "Python Shaders",
  subpages: [
    { name: "Overview", path: "/shaders/python/overview" }, // Intro and history
    { name: "Syntax", path: "/shaders/python/syntax" }, // Writing shaders with Python
    { name: "Integration", path: "/shaders/python/integration" }, // Integration with libraries (e.g., Pygame, Panda3D)
    { name: "Applications", path: "/shaders/python/applications" }, // Use cases like rendering effects
  ],
};

export default PythonShadersNavigation;
