import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        {
          name: "Installation",
          path: "/opengl/basics/getting-started/installation"
        },
        {
          name: "Environment Setup",
          path: "/opengl/basics/getting-started/environment-setup"
        }
      ]
    },
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/opengl/basics/fundamentals/introduction"
        },
        {
          name: "Core Pipeline",
          path: "/opengl/basics/fundamentals/core-pipeline"
        }
      ]
    },
    {
      name: "Buffers & Objects",
      subpages: [
        {
          name: "VBO / VAO",
          path: "/opengl/basics/buffers-and-objects/vbo-and-vao"
        },
        {
          name: "FBO & Post-Process",
          path: "/opengl/basics/buffers-and-objects/fbo-and-post-process"
        }
      ]
    },
    {
      name: "Techniques",
      subpages: [
        {
          name: "Lighting Models",
          path: "/opengl/basics/techniques/lighting-models"
        },
        {
          name: "Shadow Mapping",
          path: "/opengl/basics/techniques/shadow-mapping"
        }
      ]
    }
  ]
};

export default Basics;