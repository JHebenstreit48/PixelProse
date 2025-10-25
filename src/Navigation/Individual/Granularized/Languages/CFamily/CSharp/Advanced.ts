import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const CSharpAdvancedNavigation: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Modern Features",
      subpages: [
        {
          name: "LINQ",
          path: "/cfamily/csharp/advanced/linq"
        },
        {
          name: "Asynchronous Programming",
          path: "/cfamily/csharp/advanced/async"
        }
      ]
    },
    {
      name: "Game-Oriented Concepts",
      subpages: [
        {
          name: "Game Development Best Practices",
          path: "/cfamily/csharp/advanced/gamedev-practices"
        },
        {
          name: "Garbage Collection in Games",
          path: "/cfamily/csharp/advanced/garbage-collection"
        }
      ]
    }
  ]
};

export default CSharpAdvancedNavigation;
