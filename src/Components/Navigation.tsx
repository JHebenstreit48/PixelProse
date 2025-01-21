import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import pages from "@/Navigation/Pages";
import { Page, Subpage } from "@/Navigation/NavigationTypes";

type DropdownDirection = "up" | "down" | "start" | "end";

// Prepare the navigation data for rendering
const navigationPages: Page[] = pages;

interface NavigationProps {
  dropdownDirection?: DropdownDirection; // Define the dropdownDirection prop
}

const Navigation: React.FC<NavigationProps> = ({
  dropdownDirection = "down",
}) => {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());
  const [filterValues, setFilterValues] = useState<{ [key: string]: string }>(
    {}
  );

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => {
      const newDropdowns = new Set(prev);
      if (newDropdowns.has(key)) {
        newDropdowns.delete(key); // Close the dropdown if it's already active
      } else {
        newDropdowns.add(key); // Open the dropdown
      }
      return newDropdowns;
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  };

  const searchSubpages = (subpages: Subpage[], filterText: string): Subpage[] => {
    const lowerFilter = filterText.toLowerCase();

    return subpages.flatMap((subpage) => {
      const matches = subpage.name.toLowerCase().includes(lowerFilter);
      const matchingChildren = subpage.subpages
        ? searchSubpages(subpage.subpages, filterText)
        : [];

      if (matches) {
        return [{ ...subpage, subpages: matchingChildren }];
      }

      return matchingChildren;
    });
  };

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ): React.ReactNode[] => {
    const filterText = filterValues[parentKey] || "";

    const filteredSubpages = filterText
      ? searchSubpages(subpages, filterText)
      : subpages;

    return filteredSubpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isActive = activeDropdown.has(key);

      return (
        <div
          key={key}
          className={`dropdownItem level-${level}`} // Keeps the level-based CSS classes
        >
          {subpage.path ? (
            <Dropdown.Item
              as={Link}
              to={subpage.path}
              className="dropdownLink" // Keeps the clickable link style
            >
              {subpage.name}
            </Dropdown.Item>
          ) : (
            <>
              <Dropdown.ItemText
                className={`dropdownButton level-${level}`} // Keeps the hierarchical button styling
                onClick={() => toggleDropdown(key)}
              >
                {subpage.name}
              </Dropdown.ItemText>
              {isActive && subpage.subpages && (
                <div className={`dropdownMenu level-${level} active`}>
                  {renderSubpages(subpage.subpages, key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="navigationMenu">
      <div className="navigationContent">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className="me-auto">
                {navigationPages.map((page, index) => {
                  const pageKey = `page-${index}`;
                  const isActive = activeDropdown.has(pageKey);

                  // Special handling for Home: no dropdown
                  if (page.name === "Home" && page.subpages.length === 0) {
                    return (
                      <Nav.Link
                        key={pageKey}
                        as={Link}
                        to="/"
                        className="dropdownButton homeButton" // Applies Home-specific CSS
                      >
                        {page.name}
                      </Nav.Link>
                    );
                  }

                  // Render other pages with subpages
                  return (
                    <Dropdown
                      key={pageKey}
                      show={isActive}
                      onToggle={(isOpen) => toggleDropdown(pageKey)}
                      className="dropdown" // Keeps the dropdown styling
                      drop={dropdownDirection}
                    >
                      <Dropdown.Toggle
                        as="button"
                        id={`dropdown-toggle-${pageKey}`}
                        className={`dropdownButton ${isActive ? "active" : ""}`} // Keeps toggle button style
                      >
                        {page.name}
                        {page.subpages.length > 0 && (
                          <span
                            className={`dropdownArrow ${
                              isActive ? "up" : "down"
                            }`} // Keeps the arrow styling
                          />
                        )}
                      </Dropdown.Toggle>

                      {page.subpages.length > 0 && (
                        <Dropdown.Menu
                          className={`dropdownContent ${
                            isActive ? "active" : ""
                          }`} // Keeps dropdown content styling
                        >
                          <Form.Control
                            autoFocus
                            className="mx-3 my-2 w-auto filterInput" // Keeps search bar styling
                            placeholder="Type to filter..."
                            onChange={(e) =>
                              handleFilterChange(pageKey, e.target.value)
                            }
                            value={filterValues[pageKey] || ""}
                          />
                          {renderSubpages(page.subpages, pageKey)}
                        </Dropdown.Menu>
                      )}
                    </Dropdown>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;

//   {
//     name: "Home",
//     subpages: [],
//   },
//   {
//     name: "Programming Languages",
//     subpages: [
//       {
//         name: "C",
//         subpages: [
//           {
//             name: "C",
//             subpages: [
//               {
//                 name: "C Notes",
//                 path: "/c"
//               },
//               {
//                 name: "C Code Notes",
//                 path: "/c/ccode"
//               },
//             ],
//           },
//           {
//             name: "C++",
//             subpages: [
//               {
//                 name: "C++ Notes",
//                 path: "/c/cplusplus"
//               },
//               {
//                 name: "C++ Code Notes",
//                 path: "/c/cplusplus/cpluspluscode"
//               },
//             ],
//           },
//           {
//             name: "C#",
//             subpages: [
//               {
//                 name: "C# Notes",
//                 path: "/c/csharp",
//               },
//               {
//                 name: "C# Code Notes",
//                 path: "/c/csharp/csharpcode"
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Lua",
//         subpages: [
//           {
//             name: "Lua Notes",
//             path: "/lua"
//           },
//           {
//             name: "Lua Code Notes",
//             path: "/lua/code"
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Game Engines",
//     subpages: [
//       {
//         name: "Unity",
//         subpages: [
//           {
//             name: "Unity Notes",
//             path: "/unity"
//           },
//           {
//             name: "Unity Code Notes",
//             path: "/unity/code"
//           },
//         ],
//       },
//       {
//         name: "Unreal Engine",
//         subpages: [
//           {
//             name: "Unreal Engine Notes",
//             path: "/unrealengine",
//           },
//           {
//             name: "Unreal Engine Code Notes",
//             path: "/unrealengine/code"
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Graphics Programming",
//     subpages: [
//       {
//         name: "Shaders",
//         subpages: [
//           {
//             name: "HLSL",
//             subpages: [
//               { name: "HLSL Notes", path: "/shaders/hlsl" },
//               { name: "HLSL Code Notes", path: "/shaders/hlsl/code" },
//             ],
//           },
//           {
//             name: "GLSL",
//             subpages: [
//               { name: "GLSL Notes", path: "/shaders/glsl" },
//               { name: "GLSL Code Notes", path: "/shaders/glsl/code" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Rendering APIs",
//         subpages: [
//           {
//             name: "DirectX",
//             subpages: [{ name: "DirectX Notes", path: "/rendering/directx" }],
//           },
//           {
//             name: "OpenGL",
//             subpages: [
//               {
//                 name: "OpenGL Notes",
//                 path: "/rendering/opengl",
//               },
//             ],
//           },
//           {
//             name: "Vulkan",
//             subpages: [{ name: "Vulkan Notes", path: "/rendering/vulkan" }],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Game Design",
//     subpages: [
//       {
//         name: "Game Design Notes",
//         path: "/gamedesign",
//       },
//     ],
//   },
//   {
//     name: "AI",
//     subpages: [
//       {
//         name: "AI Notes",
//         path: "/ai",
//       },
//       {
//         name: "AI Code Notes",
//         path: "/ai/code",
//       },
//     ],
//   },
//   {
//     name: "Physics",
//     subpages: [
//       {
//         name: "Physics Notes",
//         path: "/physics",
//       },
//       {
//         name: "Physics Code Notes",
//         path: "/physics/code",
//       },
//     ],
//   },
//   {
//     name: "Audio",
//     subpages: [
//       {
//         name: "Audio Notes",
//         path: "/audio",
//       },
//       {
//         name: "Audio Code Notes",
//         path: "/audio/code",
//       },
//     ],
//   },
//   {
//     name: "Networking",
//     subpages: [
//       {
//         name: "Overview",
//         subpages: [
//           { name: "Networking Overview", path: "/networking/overview" },
//         ],
//       },
//       {
//         name: "Client-Server Architecture",
//         subpages: [
//           {
//             name: "Client-Server Networking",
//             path: "/networking/clientserver",
//           },
//         ],
//       },
//       {
//         name: "Peer-to-Peer Networking",
//         subpages: [
//           {
//             name: "P2P Networking",
//             path: "/networking/p2p",
//           },
//         ],
//       },
//       {
//         name: "Protocols",
//         subpages: [
//           {
//             name: "Networking Protocols",
//             path: "/networking/protocols",
//           },
//         ],
//       },
//       {
//         name: "Lag and Latency Management",
//         subpages: [
//           {
//             name: "Networking Lag",
//             path: "/networking/lag",
//           },
//         ],
//       },
//       {
//         name: "Networking Security",
//         subpages: [
//           {
//             name: "Networking Security Notes",
//             path: "/networking/security",
//           },
//         ],
//       },
//       {
//         name: "Code Snippets",
//         subpages: [
//           {
//             name: "Networking Code Notes",
//             path: "/networking/code",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Game Testing",
//     subpages: [
//       { name: "Game Testing Notes", path: "/testing" },
//       { name: "Game Testing Code Notes", path: "/testing/code" },
//     ],
//   },
//   {
//     name: "Platforms & Frameworks",
//     subpages: [
//       {
//         name: "Android Game Development",
//         subpages: [
//           { name: "Android Notes", path: "/platforms/android" },
//           { name: "Android Code Notes", path: "/platforms/android/code" },
//         ],
//       },
//       {
//         name: "iOS Game Development",
//         subpages: [
//           { name: "iOS Notes", path: "/platforms/ios" },
//           { name: "iOS Code Notes", path: "/platforms/ios/code" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Tools & Middleware",
//     subpages: [{ name: "Middleware Notes", path: "/middleware" }],
//   },
// ];
