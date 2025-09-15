import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "EditMode vs PlayMode",
          path: "/unity/testing/basics/editmode-vs-playmode"
        },
        {
          name: "Install & Setup",
          path: "/unity/testing/basics/install-and-setup"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Assertions & Lifecycle",
          path: "/unity/testing/authoring/assertions-and-lifecycle"
        },
        {
          name: "Scene Setup & Teardown",
          path: "/unity/testing/authoring/scene-setup-and-teardown"
        }
      ]
    },
    {
      name: "Isolation",
      subpages: [
        {
          name: "Fakes & Substitutes",
          path: "/unity/testing/isolation/fakes-and-substitutes"
        },
        {
          name: "Time & Randomness",
          path: "/unity/testing/isolation/time-and-randomness"
        }
      ]
    },
    {
      name: "CI & Coverage",
      subpages: [
        {
          name: "Batchmode & CLI",
          path: "/unity/testing/ci-and-coverage/batchmode-and-cli"
        },
        {
          name: "Code Coverage",
          path: "/unity/testing/ci-and-coverage/code-coverage"
        }
      ]
    }
  ]
};

export default Testing;