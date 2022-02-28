import { RoughNotation } from 'react-rough-notation';

interface Props {
  text: string;
  href: string;
}

function ExternalLink({ text, href }: Props) {
  return (
    <RoughNotation type="underline" color="#6A34F9" strokeWidth={4}>
      <a
        style={{ color: '#6A34F9', textDecoration: 'none' }}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <b>{text}</b>
      </a>
    </RoughNotation>
  );
}

export default ExternalLink;
