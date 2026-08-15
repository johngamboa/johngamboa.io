import { RoughNotation } from 'react-rough-notation';

import { useTheme } from '../../context/ThemeContext';
import { STROKE_WIDTH } from '../../constants/roughNotationConstants';

function Description() {
  const { colors } = useTheme();

  return (
    <RoughNotation
      type="box"
      color={colors.annotation}
      strokeWidth={STROKE_WIDTH}
    >
      <b style={{ color: colors.text }}>
        manager, software engineering @ anduril industries
      </b>
    </RoughNotation>
  );
}

export default Description;
