import { RoughNotation } from 'react-rough-notation';

import { useTheme } from '../../context/ThemeContext';
import { STROKE_WIDTH } from '../../constants/roughNotationConstants';

type Props = {
  children: any;
  to: string;
};

function ExternalLink({ children, to }: Props) {
  const { colors } = useTheme();

  return (
    <RoughNotation
      type="underline"
      color={colors.annotation}
      strokeWidth={STROKE_WIDTH}
    >
      <a
        style={{ color: colors.text, textDecoration: 'none' }}
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
