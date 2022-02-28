import { RoughNotationGroup } from 'react-rough-notation';

import Header from '../components/index/Header';
import Description from '../components/index/Description';
import Links from '../components/index/Links';
import Circle from '../components/index/Circle';

export default function Index() {
  return (
    <RoughNotationGroup show>
      <div
        style={{
          padding: '10vh 20vw 10vh 20vw',
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Circle />
        <div>
          <Header />
          <Description />
          <Links />
        </div>
      </div>
    </RoughNotationGroup>
  );
}
