import { Link } from "react-router-dom";
import { useState } from "react";

const pages = [
    {
      name: "Home",
      subpages: [],
    },
    {
       name: "Placeholder",
       subpages: [
         { name: "Subpage 1", path: "/subpage1" },
         { name: "Subpage 2", path: "/subpage2" },
       ], 
    },
];

const Navigation = () => {
    // State to handle sidebar collapse
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    // State to manage the visibility of dropdowns
    const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const closeSidebar = () => {
      setIsCollapsed(true);
    };
  
    return (
      <div className={`nav-css ${isCollapsed ? "collapsed" : ""}`}>
        {/* Toggle Button */}
        <button className="toggleButton" onClick={toggleSidebar}>
          {isCollapsed ? (
            <i className="menu-icon fas fa-bars " aria-hidden="false"></i>
          ) : (
            <i className="close-icon fas fa-times " aria-hidden="false"></i>
          )}
        </button>
  
        {!isCollapsed && (
          <div className="nav-content">
            {/* Accordion for Pages */}
            <div className="accordion">
              {pages.map((page, index) => (
                <div key={page.name} className="accordion-item">
                  <h2 className="accordion-header">
                    {/* Check if the page has subpages */}
                    {page.subpages.length === 0 ? (
                      // Render the Home button with unique ID
                      <Link
                        to="/"
                        className="accordion-button no-dropdown"
                        id="home-button"
                        onClick={closeSidebar}
                      >
                        {page.name}
                      </Link>
                    ) : (
                      // Render regular accordion buttons with dropdowns
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {page.name}
                      </button>
                    )}
                  </h2>
  
                  {/* Only render subpages if they exist */}
                  {page.subpages.length > 0 && (
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {page.subpages.map((subpage) => (
                          <p key={subpage.name}>
                            <Link
                              to={subpage.path}
                              className="nav-link"
                              onClick={closeSidebar}
                            >
                              {subpage.name}
                            </Link>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Navigation;
  