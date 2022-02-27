interface Props {
  text: string;
  href: string;
}

function ExternalLink({ text, href }: Props) {
  return (
    <a
      style={{ color: '#6A34F9' }}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <b>{text}</b>
    </a>
  );
}

export default ExternalLink;
