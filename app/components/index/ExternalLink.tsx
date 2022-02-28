import { RoughNotation } from 'react-rough-notation';

import { PURPLE, LIGHT_PURPLE } from '../../constants/colors';

interface Props {
  text: string;
  href: string;
}

function ExternalLink({ text, href }: Props) {
  return (
    <RoughNotation type="underline" color={LIGHT_PURPLE} strokeWidth={4}>
      <a
        style={{ color: PURPLE, textDecoration: 'none' }}
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
