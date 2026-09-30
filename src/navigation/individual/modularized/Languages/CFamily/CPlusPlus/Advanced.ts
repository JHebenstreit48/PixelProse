import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Modern C++ Features",
      subpages: [
        {
          name: "Templates",
          path: "languages/c-family/c-plus-plus/advanced/modern/templates"
        },
        {
          name: "Smart Pointers",
          path: "languages/c-family/c-plus-plus/advanced/modern/smartpointers"
        }
      ]
    },
    {
      name: "Concurrency & Error Handling",
      subpages: [
        {
          name: "Multithreading",
          path: "languages/c-family/c-plus-plus/advanced/concurrency/multithreading"
        },
        {
          name: "Exception Handling",
          path: "languages/c-family/c-plus-plus/advanced/concurrency/exceptions"
        }
      ]
    },
    {
      name: "Advanced STL Usage",
      subpages: [
        {
          name: "Advanced STL Techniques",
          path: "languages/c-family/c-plus-plus/advanced/stl/advanced-stl"
        },
        {
          name: "Custom Comparators and Functors",
          path: "languages/c-family/c-plus-plus/advanced/stl/custom-comparators-functors"
        }
      ]
    }
  ]
};

export default Advanced;
