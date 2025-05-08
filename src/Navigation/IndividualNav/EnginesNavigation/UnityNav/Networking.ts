import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityNetworkingNavigation: Subpage = {
  name: "Networking",
  subpages: [
    {
      name: "Multiplayer Systems",
      subpages: [
        { name: "Netcode for GameObjects", path: "/unity/networking/netcode" },
        { name: "Relay & Lobby Services", path: "/unity/networking/relay-lobby" }
      ]
    },
    {
      name: "Architecture",
      subpages: [
        { name: "Multiplayer Architecture", path: "/unity/networking/architecture" },
        { name: "Network Topologies", path: "/unity/networking/network-topologies" }
      ]
    }
  ]
};

export default UnityNetworkingNavigation;
