import ExternalLink from '../components/ExternalLink';

export default function Index() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#eaeaea',
        height: '100vh',
      }}
    >
      <div
        style={{
          lineHeight: '1.4',
          display: 'grid',
          placeItems: 'center',
          height: '60vh',
        }}
      >
        <div>
          <h1
            style={{ color: '#6A34F9', width: '50vw' }}
          >{`hi, i'm john gamboa.`}</h1>
          <p>
            <span>senior front end engineer @ </span>
            <ExternalLink text="HubSpot" href="https://www.hubspot.com" />
            <span>. currently working on</span>
            <ExternalLink
              text="Forecast"
              href="https://www.hubspot.com/products/forecasting"
            />
            <span>.</span>
          </p>
          <p>
            <span>
              previously worked on Meetings, Goals, Sequences, Documents,
              Templates, and Snippets.
            </span>
          </p>
          <p>
            <span>check out my </span>
            <ExternalLink
              text="LinkedIn"
              href="https://www.linkedin.com/in/johnhadriangamboa/"
            />
            <span>, </span>
            <ExternalLink
              text="GitHub"
              href="https://www.github.com/johngamboa/"
            />
            <span>, and </span>
            <ExternalLink
              text="resume"
              href="https://www.dropbox.com/s/0nmd9slvkn52got/John%20Hadrian%20Gamboa%20Resume.pdf"
            />
            <span>.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
