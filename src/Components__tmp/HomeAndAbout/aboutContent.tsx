export default function AboutContent() {
  return (
    <>
      <div className="siteInfoContent">
        <h1>About PixelProse</h1>
        PixelProse is a personal, continually evolving reference for <span className="emphasis"> game development</span>, focused on <span className="emphasis">PC, console, web, and handheld</span> platforms. It organizes notes on programming, design workflows, production stages, engines, tools, and testing practices that support a professional-grade development pipeline.
      </div>

      <hr />

      <div className="Note">
        <strong>Current focus:</strong> expanding coverage of engine workflows, build optimization, and production pipelines.
      </div>

      <hr />

      <div className="siteInfoContent">
        <h2>What you'll find</h2>
        <ul>
          <li>Notes on game design principles, asset pipelines, and testing strategies</li>
          <li>Coverage of popular engines like Unity, Unreal, and Godot</li>
          <li>References for production workflows and optimization techniques</li>
        </ul>
      </div>

      <hr />

      <div className="otherSitesDescription">
        This project shares a common structure with several others:
        <ul>
          <li>
            <strong>NetNotes</strong> – Networking and Cisco technologies
          </li>
          <li>
            <strong>DevScriptStax</strong> – Full stack web development
          </li>
          <li>
            <strong>AppFoundry</strong> – Mobile app &amp; game development
          </li>
        </ul>
      </div>
    </>
  );
}