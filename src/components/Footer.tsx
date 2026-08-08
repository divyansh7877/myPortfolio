import TrackedDownload from "./TrackedDownload";

const links = [
  ["GitHub", "https://github.com/divyansh7877"],
  ["LinkedIn", "https://www.linkedin.com/in/div2201/"],
  ["X / Twitter", "https://x.com/div__vi"],
  ["Email", "mailto:da3245@nyu.edu"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-title">Let’s make it real.</p>
        <div className="footer-links">{links.map(([label, href]) => <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} key={label}>{label} ↗</a>)}</div>
        <div className="footer-documents"><TrackedDownload name="Resume" href="/Divyansh_Agarwal_Resume.pdf" /><TrackedDownload name="Transcripts" href="/Divyansh_Agarwal_Transcript_og.pdf" /></div>
        <div className="footer-meta"><span>© {new Date().getFullYear()} Div Agarwal</span><span>Designed + engineered in San Francisco</span></div>
      </div>
    </footer>
  );
}
