import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Modern C++ Features",
      subpages: [
        {
          name: "Templates",
          path: "/cplusplus/advanced/modern/templates"
        },
        {
          name: "Smart Pointers",
          path: "/cplusplus/advanced/modern/smartpointers"
        }
      ]
    },
    {
      name: "Concurrency & Error Handling",
      subpages: [
        {
          name: "Multithreading",
          path: "/cplusplus/advanced/concurrency/multithreading"
        },
        {
          name: "Exception Handling",
          path: "/cplusplus/advanced/concurrency/exceptions"
        }
      ]
    },
    {
      name: "Advanced STL Usage",
      subpages: [
        {
          name: "Advanced STL Techniques",
          path: "/cplusplus/advanced/stl/advanced-stl"
        },
        {
          name: "Custom Comparators and Functors",
          path: "/cplusplus/advanced/stl/custom-comparators-functors"
        }
      ]
    }
  ]
};

export default Advanced;
