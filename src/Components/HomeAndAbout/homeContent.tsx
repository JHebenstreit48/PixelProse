export default function HomeContent() {
  return (
    <>
      <div className="siteInfoContent">
        PixelProse is a focused knowledge base for <span className="emphasis">non-mobile game development</span> —
        covering design, coding, workflows, and testing across <span className="emphasis">PC, console, web, and handheld</span>{" "}
        platforms.
      </div>

      <hr />

      <div className="Note">
        <strong>Note:</strong> All sites are currently being refactored for consistent structure and lazy-loaded navigation.
      </div>

      <hr />

      <div className="relatedProjects">
        <h2 className="relatedProjectsHeader">Similar Projects</h2>
        <hr />
        <ul className="projectLinks">
          <li>
            <a href="https://netnotes.netlify.app/" target="_blank" rel="noopener noreferrer">
              NetNotes
            </a>{" "}
            – Networking &amp; Cisco certifications
          </li>
          <li>
            <a href="https://devscriptstax.netlify.app/" target="_blank" rel="noopener noreferrer">
              DevScriptStax
            </a>{" "}
            – Full stack web development
          </li>
          <li>
            <a href="https://appfoundry.netlify.app/" target="_blank" rel="noopener noreferrer">
              AppFoundry
            </a>{" "}
            – Mobile app &amp; game development notes
          </li>
        </ul>
      </div>
    </>
  );
}