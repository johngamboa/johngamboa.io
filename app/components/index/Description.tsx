import { RoughNotation } from 'react-rough-notation';

import { LIGHT_PURPLE } from '../../constants/colors';
import { STROKE_WIDTH } from '../../constants/roughNotationConstants';

function Description() {
  return (
    <RoughNotation type="box" color={LIGHT_PURPLE} strokeWidth={STROKE_WIDTH}>
      <b>mission software engineer @ anduril industries</b>
    </RoughNotation>
  );
}

export default Description;
