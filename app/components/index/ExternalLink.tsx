import { RoughNotation } from 'react-rough-notation';

import { PURPLE, LIGHT_PURPLE } from '../../constants/colors';

interface Props {
  children: any;
  to: string;
}

function ExternalLink({ children, to }: Props) {
  return (
    <RoughNotation type="underline" color={LIGHT_PURPLE} strokeWidth={2}>
      <a
        style={{ color: PURPLE, textDecoration: 'none' }}
        href={to}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </RoughNotation>
  );
}

export default ExternalLink;
