import ExternalLink from './ExternalLink';

function Links() {
  return (
    <p>
      <span>check out my </span>
      <ExternalLink to="https://www.linkedin.com/in/johnhadriangamboa/">
        <b>LinkedIn</b>
      </ExternalLink>
      <span>, </span>
      <ExternalLink to="https://www.github.com/johngamboa/">
        <b>GitHub</b>
      </ExternalLink>
      <span>, and </span>
      <ExternalLink to="https://www.dropbox.com/s/6i9zh2sq9h80hmc/John%20Hadrian%20Gamboa%20Resume.pdf?dl=0">
        <b>résumé</b>
      </ExternalLink>
      <span>.</span>
    </p>
  );
}

export default Links;
