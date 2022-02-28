import { RoughNotation } from 'react-rough-notation';

import { LIGHT_PURPLE } from '../../constants/colors';

function Description() {
  return (
    <RoughNotation type="box" color={LIGHT_PURPLE} strokeWidth={2}>
      <b>front end engineer @ HubSpot</b>
    </RoughNotation>
  );
}

export default Description;
