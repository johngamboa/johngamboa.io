import { RoughNotation } from 'react-rough-notation';

import { LIGHT_GREY } from '../../constants/colors';
import { STROKE_WIDTH } from '../../constants/roughNotationConstants';

function Description() {
  return (
    <RoughNotation type="box" color={LIGHT_GREY} strokeWidth={STROKE_WIDTH}>
      <b>mission software engineer @ anduril industries</b>
    </RoughNotation>
  );
}

export default Description;
