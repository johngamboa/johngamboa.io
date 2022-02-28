import ExternalLink from './ExternalLink';

function Links() {
  return (
    <p>
      <span>check out my </span>
      <ExternalLink
        text="LinkedIn"
        href="https://www.linkedin.com/in/johnhadriangamboa/"
      />
      <span>, </span>
      <ExternalLink text="GitHub" href="https://www.github.com/johngamboa/" />
      <span>, and </span>
      <ExternalLink
        text="résumé"
        href="https://www.dropbox.com/s/0nmd9slvkn52got/John%20Hadrian%20Gamboa%20Resume.pdf"
      />
      <span>.</span>
    </p>
  );
}

export default Links;
