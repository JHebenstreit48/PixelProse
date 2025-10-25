import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/rpg-maker/basics/fundamentals/introduction"
        },
        {
          name: "Editor & Layout",
          path: "/rpg-maker/basics/fundamentals/editor-and-layout"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Create & Configure",
          path: "/rpg-maker/basics/project-setup/create-and-configure"
        },
        {
          name: "Resources & Folders",
          path: "/rpg-maker/basics/project-setup/resources-and-folders"
        }
      ]
    },
    {
      name: "Maps & Tiles",
      subpages: [
        {
          name: "Tilesets & Regions",
          path: "/rpg-maker/basics/maps-and-tiles/tilesets-and-regions"
        },
        {
          name: "Parallax & AutoTiles",
          path: "/rpg-maker/basics/maps-and-tiles/parallax-and-autotiles"
        }
      ]
    },
    {
      name: "Events",
      subpages: [
        {
          name: "Triggers & Pages",
          path: "/rpg-maker/basics/events/triggers-and-pages"
        },
        {
          name: "Switches & Variables",
          path: "/rpg-maker/basics/events/switches-and-variables"
        }
      ]
    },
    {
      name: "Database",
      subpages: [
        {
          name: "Actors & Classes",
          path: "/rpg-maker/basics/database/actors-and-classes"
        },
        {
          name: "Items & Skills",
          path: "/rpg-maker/basics/database/items-and-skills"
        }
      ]
    },
    {
      name: "Battles",
      subpages: [
        {
          name: "Types & Flow",
          path: "/rpg-maker/basics/battles/types-and-flow"
        },
        {
          name: "States & Effects",
          path: "/rpg-maker/basics/battles/states-and-effects"
        }
      ]
    },
    {
      name: "UI & Menus",
      subpages: [
        {
          name: "Windows & Scenes",
          path: "/rpg-maker/basics/ui-and-menus/windows-and-scenes"
        },
        {
          name: "Messages & Choices",
          path: "/rpg-maker/basics/ui-and-menus/messages-and-choices"
        }
      ]
    },
    {
      name: "Audio",
      subpages: [
        {
          name: "BGM/BGS/SE",
          path: "/rpg-maker/basics/audio/bgm-bgs-se"
        },
        {
          name: "Import & Loops",
          path: "/rpg-maker/basics/audio/import-and-loops"
        }
      ]
    }
  ]
};

export default Basics;