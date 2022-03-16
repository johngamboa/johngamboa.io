import { RoughNotation } from 'react-rough-notation';

import { PURPLE, LIGHT_PURPLE } from '../../constants/colors';
import { STROKE_WIDTH } from '../../constants/roughNotationConstants';

type Props = {
  children: any;
  to: string;
};

function ExternalLink({ children, to }: Props) {
  return (
    <RoughNotation
      type="underline"
      color={LIGHT_PURPLE}
      strokeWidth={STROKE_WIDTH}
    >
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
