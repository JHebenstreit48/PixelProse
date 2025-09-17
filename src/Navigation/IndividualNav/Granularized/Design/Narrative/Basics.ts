import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Foundations",
      subpages: [
        {
          name: "Overview",
          path: "/gamedesign/narrative/basics/foundations/overview"
        },
        {
          name: "Character Basics",
          path: "/gamedesign/narrative/basics/foundations/character-basics"
        }
      ]
    },
    {
      name: "Structure",
      subpages: [
        {
          name: "Linear vs Nonlinear",
          path: "/gamedesign/narrative/basics/structure/linear-vs-nonlinear"
        },
        {
          name: "Scene Beats",
          path: "/gamedesign/narrative/basics/structure/scene-beats"
        }
      ]
    },
    {
      name: "Dialogue",
      subpages: [
        {
          name: "Branching Basics",
          path: "/gamedesign/narrative/basics/dialogue/branching-basics"
        },
        {
          name: "Tone & Pacing",
          path: "/gamedesign/narrative/basics/dialogue/tone-and-pacing"
        }
      ]
    }
  ]
};

export default Basics;