import { Link } from "react-router-dom";
import { useState } from "react";

// Define the types for subpages and pages
type Subpage = {
  name: string;
  path?: string;
  subpages?: Subpage[];
};

type Page = {
  name: string;
  subpages: Subpage[];
};

// Define the navigation structure
const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Programming Languages",
    subpages: [
      {
        name: "C",
        subpages: [
          {
            name: "C",
            subpages: [
              {
                name: "C Notes",
                path: "/c",
              },
              {
                name: "C Code Notes",
                path: "/c/code",
              },
            ],
          },
          {
            name: "C++",
            subpages: [
              {
                name: "C++ Notes",
                path: "/cplusplus",
              },
              {
                name: "C++ Code Notes",
                path: "/cplusplus/code",
              },
            ],
          },
          {
            name: "C#",
            subpages: [
              {
                name: "C# Notes",
                path: "/csharp",
              },
              {
                name: "C# Code Notes",
                path: "/csharp/code",
              },
            ],
          },
        ],
      },
      {
        name: "Lua",
        subpages: [
          { name: "Lua Notes", path: "/lua" },
          { name: "Lua Code Notes", path: "/lua/code" },
        ],
      },
    ],
  },
  {
    name: "Game Engines",
    subpages: [
      {
        name: "Unity",
        subpages: [
          { name: "Unity Notes", path: "/unity" },
          { name: "Unity Code Notes", path: "/unity/code" },
        ],
      },
      {
        name: "Unreal Engine",
        subpages: [
          { name: "Unreal Engine Notes", path: "/unrealengine" },
          { name: "Unreal Engine Code Notes", path: "/unrealengine/code" },
        ],
      },
    ],
  },
  {
    name: "Graphics Programming",
    subpages: [
      {
        name: "Shaders",
        subpages: [
          {
            name: "HLSL",
            subpages: [
              { name: "HLSL Notes", path: "/shaders/hlsl" },
              { name: "HLSL Code Notes", path: "/shaders/hlsl/code" },
            ],
          },
          {
            name: "GLSL",
            subpages: [
              { name: "GLSL Notes", path: "/shaders/glsl" },
              { name: "GLSL Code Notes", path: "/shaders/glsl/code" },
            ],
          },
        ],
      },
      {
        name: "Rendering APIs",
        subpages: [
          {
            name: "DirectX",
            subpages: [{ name: "DirectX Notes", path: "/rendering/directx" }],
          },
          {
            name: "OpenGL",
            subpages: [{ name: "OpenGL Notes", path: "/rendering/opengl" }],
          },
          {
            name: "Vulkan",
            subpages: [{ name: "Vulkan Notes", path: "/rendering/vulkan" }],
          },
        ],
      },
    ],
  },
  {
    name: "Game Design",
    subpages: [
      {
        name: "Game Design Notes",
        path: "/gamedesign",
      },
    ],
  },
  {
    name: "Artificial Intelligence",
    subpages: [
      { name: "AI Notes", path: "/ai" },
      { name: "AI Code Notes", path: "/ai/code" },
    ],
  },
  {
    name: "Physics",
    subpages: [
      { name: "Physics Notes", path: "/physics" },
      { name: "Physics Code Notes", path: "/physics/code" },
    ],
  },
  {
    name: "Audio",
    subpages: [
      { name: "Audio Notes", path: "/audio" },
      { name: "Audio Code Notes", path: "/audio/code" },
    ],
  },
  {
    name: "Networking",
    subpages: [
      {
        name: "Overview Notes",
        path: "/networking/overview",
      },
      {
        name: "Client-Server Architecture",
        path: "/networking/clientserver",
      },
      {
        name: "Peer-to-Peer Networking",
        path: "/networking/p2p",
      },
      {
        name: "Protocols",
        path: "/networking/protocols",
      },
      {
        name: "Lag and Latency Management",
        path: "/networking/latency",
      },
      {
        name: "Networking Security",
        path: "/networking/security",
      },
      {
        name: "Code Snippets",
        path: "/networking/code",
      },
    ],
  },
  {
    name: "Game Testing",
    subpages: [
      { name: "Game Testing Notes", path: "/testing" },
      { name: "Game Testing Code Notes", path: "/testing/code" },
    ],
  },
  {
    name: "Platforms & Frameworks",
    subpages: [
      {
        name: "Android Game Development",
        subpages: [
          { name: "Android Notes", path: "/platforms/android" },
          { name: "Android Code Notes", path: "/platforms/android/code" },
        ],
      },
      {
        name: "iOS Game Development",
        subpages: [
          { name: "iOS Notes", path: "/platforms/ios" },
          { name: "iOS Code Notes", path: "/platforms/ios/code" },
        ],
      },
    ],
  },
  {
    name: "Tools & Middleware",
    subpages: [{ name: "Middleware Notes", path: "/middleware" }],
  },
];

// Navigation component
const Navigation = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => {
      const newSections = new Set(prev);
      if (newSections.has(key)) {
        newSections.delete(key);
      } else {
        newSections.add(key);
      }
      return newSections;
    });
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const renderSubpages = (
    subpages: Subpage[],
    parentKey: string,
    level: number = 1
  ) =>
    subpages.map((subpage, index) => {
      const key = `${parentKey}-${index}`;
      const isExpanded = expandedSections.has(key);

      return (
        <div key={key}>
          {subpage.path ? (
            <p>
              <Link
                to={subpage.path}
                className={`navLink ${level > 1 ? "nestedLink" : ""}`}
              >
                {subpage.name}
              </Link>
            </p>
          ) : (
            <>
              <button
                className={`subpageHeading ${
                  level > 1 ? "nestedSubpageHeading" : ""
                }`}
                onClick={() => toggleSection(key)}
                aria-expanded={isExpanded}
              >
                {subpage.name}
                {subpage.subpages && subpage.subpages.length > 0 && (
                  <span
                    className={`dropdownArrow ${isExpanded ? "up" : "down"}`}
                  ></span>
                )}
              </button>
              {isExpanded && subpage.subpages && (
                <div className="nestedSubpages">
                  {renderSubpages(subpage.subpages, key, level + 1)}
                </div>
              )}
            </>
          )}
        </div>
      );
    });

  return (
    <div className={`navigationMenu ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggleButton" onClick={toggleSidebar}>
        {isCollapsed ? (
          <i className="menuIcon fas fa-bars"></i>
        ) : (
          <i className="closeIcon fas fa-times"></i>
        )}
      </button>

      {!isCollapsed && (
        <div className="navigationContent">
          <div className="accordion">
            {pages.map((page, index) => {
              const pageKey = `page-${index}`;
              const isExpanded = expandedSections.has(pageKey);

              return (
                <div key={pageKey} className="accordionItem">
                  <h2 className="accordionHeader">
                    {page.subpages.length === 0 ? (
                      <Link
                        to="/"
                        className="accordionButton noDropdown"
                        id="homeButton"
                      >
                        {page.name}
                      </Link>
                    ) : (
                      <button
                        className="accordionButton"
                        type="button"
                        onClick={() => toggleSection(pageKey)}
                        aria-expanded={isExpanded}
                      >
                        {page.name}
                        <span
                          className={`dropdownArrow ${
                            isExpanded ? "up" : "down"
                          }`}
                        ></span>
                      </button>
                    )}
                  </h2>
                  {isExpanded && (
                    <div className="accordionCollapse">
                      <div className="accordionBody">
                        {renderSubpages(page.subpages, pageKey)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
