import { RoughNotation } from 'react-rough-notation';

import { GREY, LIGHT_GREY } from '../../constants/colors';
import { STROKE_WIDTH } from '../../constants/roughNotationConstants';

type Props = {
  children: any;
  to: string;
};

function ExternalLink({ children, to }: Props) {
  return (
    <RoughNotation
      type="underline"
      color={LIGHT_GREY}
      strokeWidth={STROKE_WIDTH}
    >
      <a
        style={{ color: GREY, textDecoration: 'none' }}
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
