import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
        name: "Fundamentals",
        subpages: [
          {
            name: "Project Structure",
            path: "/lua/basics/fundamentals/project-structure"
          },
          {
            name: "Entry Point & Game Loop",
            path: "/lua/basics/fundamentals/entry-game-loop"
          },
          {
            name: "Assets Basics",
            path: "/lua/basics/fundamentals/assets-basics"
          }
        ]
      },
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Love2D",
          path: "/lua/basics/frameworks/love2d"
        },
        {
          name: "Defold",
          path: "/lua/basics/frameworks/defold"
        },
        {
          name: "Solar2D",
          path: "/lua/basics/frameworks/solar2d"
        },
        {
          name: "LÖVR",
          path: "/lua/basics/frameworks/lovr"
        }
      ]
    },
    {
      name: "Input & Rendering",
      subpages: [
        {
          name: "Input Handling",
          path: "/lua/basics/input-and-rendering/input-handling"
        },
        {
          name: "Drawing & Coordinates",
          path: "/lua/basics/input-and-rendering/drawing-and-coordinates"
        }
      ]
    }
  ]
};

export default Basics;