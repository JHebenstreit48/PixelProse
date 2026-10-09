import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Foundations",
      subpages: [
        {
          name: "Introduction",
          path: "/design/narrative/basics/foundations/introduction"
        },
        {
          name: "Character Basics",
          path: "/design/narrative/basics/foundations/character-basics"
        }
      ]
    },
    {
      name: "Structure",
      subpages: [
        {
          name: "Linear vs Nonlinear",
          path: "/design/narrative/basics/structure/linear-vs-nonlinear"
        },
        {
          name: "Scene Beats",
          path: "/design/narrative/basics/structure/scene-beats"
        },
        {
          name: "Story Maps",
          path: "/design/narrative/basics/structure/story-maps"
        }
      ]
    },
    {
      name: "Dialogue",
      subpages: [
        {
          name: "Branching Basics",
          path: "/design/narrative/basics/dialogue/branching-basics"
        },
        {
          name: "Tone & Pacing",
          path: "/design/narrative/basics/dialogue/tone-and-pacing"
        }
      ]
    }
  ]
};

export default Basics;