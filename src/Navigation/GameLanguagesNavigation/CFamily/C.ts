import { Subpage } from "@/Navigation/NavigationTypes";

const CFamilyNavigation: Subpage = {
  name: "C Family",
  subpages: [
    {
      name: "C",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Overview", path: "/c/basics/overview" },
            { name: "Syntax", path: "/c/basics/syntax" },
            { name: "Data Types", path: "/c/basics/datatypes" },
            { name: "Control Flow", path: "/c/basics/controlflow" },
          ],
        },
        {
          name: "Advanced",
          subpages: [
            { name: "Memory Management", path: "/c/advanced/memory" },
            { name: "Pointers", path: "/c/advanced/pointers" },
            { name: "File I/O", path: "/c/advanced/fileio" },
            { name: "Macros & Preprocessor", path: "/c/advanced/macros" },
            { name: "Real-Time System Optimizations", path: "/c/advanced/realtime-optimizations" },
          ],
        },
        {
          name: "Tools",
          subpages: [
            { name: "Standard Library", path: "/c/tools/stdlib" },
            { name: "Popular Libraries", path: "/c/tools/popularlibs" },
            { name: "Debugging Tools", path: "/c/tools/debugging" },
            { name: "Embedded Systems Use Cases", path: "/c/tools/embedded-systems" },
          ],
        },
        {
          name: "Testing",
          subpages: [
            { name: "Testing Frameworks", path: "/c/testing/frameworks" },
            { name: "Unit Testing in C", path: "/c/testing/unit-testing" },
            { name: "Integration Testing for Real-Time Systems", path: "/c/testing/integration-testing" },
          ],
        },
      ],
    },
  ],
};

export default CFamilyNavigation;
