import { Subpage } from "@/Navigation/NavigationTypes";

const NarrativeDesignNavigation: Subpage = {
  name: "Narrative Design",
  subpages: [
    {
      name: "Storytelling Basics",
      subpages: [
        { name: "Overview", path: "/gamedesign/narrative/overview" },
        { name: "Linear vs. Non-linear Narratives", path: "/gamedesign/narrative/linear-nonlinear" },
        { name: "Character Development", path: "/gamedesign/narrative/character-development" },
      ],
    },
    {
      name: "Branching Narratives",
      subpages: [
        { name: "Choices and Consequences", path: "/gamedesign/narrative/branching/choices-consequences" },
        { name: "Multiple Endings", path: "/gamedesign/narrative/branching/multiple-endings" },
      ],
    },
    {
      name: "Tools and Techniques",
      subpages: [
        { name: "Interactive Fiction", path: "/gamedesign/narrative/tools/interactive-fiction" },
        { name: "Story Mapping", path: "/gamedesign/narrative/tools/story-mapping" },
      ],
    },
  ],
};

export default NarrativeDesignNavigation;
