import { RoughNotationGroup } from 'react-rough-notation';

import ExternalLink from '../components/ExternalLink';

export default function Index() {
  return (
    <div
      style={{
        paddingTop: '15vh',
        paddingBottom: '15vh',
        paddingLeft: '20vw',
        paddingRight: '20vw',
      }}
    >
      <h1 style={{ color: '#6A34F9', fontSize: '48px' }}>
        <b>john gamboa</b>
      </h1>
      <RoughNotationGroup show>
        <p>
          <b>senior front end engineer</b>
          <span> @ </span>
          <ExternalLink text="HubSpot" href="https://www.hubspot.com" />
          <span>. </span>
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
      </RoughNotationGroup>
    </div>
  );
}
