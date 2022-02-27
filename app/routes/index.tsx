import { RoughNotationGroup, RoughNotation } from 'react-rough-notation';

import ExternalLink from '../components/ExternalLink';

export default function Index() {
  return (
    <div style={{ boxSizing: 'border-box', padding: '20%' }}>
      <h1 style={{ color: '#6A34F9' }}>
        <b>john gamboa</b>
      </h1>
      <RoughNotationGroup show>
        <p>
          <span>
            <RoughNotation type="highlight" color="#BF98F1">
              <b>senior front end engineer</b>
            </RoughNotation>
            <span> @ </span>
          </span>
          <ExternalLink text="HubSpot" href="https://www.hubspot.com" />
          <span>. </span>
        </p>
        <p>
          <span>currently working on </span>
          <ExternalLink
            text="Forecast"
            href="https://www.hubspot.com/products/forecasting"
          />
          <span>
            . previously worked on Meetings, Sequences, Playbooks, Goals,
            Documents, Templates, and Snippets.
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
      </RoughNotationGroup>
    </div>
  );
}
