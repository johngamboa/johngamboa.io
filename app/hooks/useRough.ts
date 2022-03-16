import { useState } from 'react';

import buildOptions from '../utils/buildOptions';

import useInitializeCanvas from './useInitializeCanvas';
import useDrawRoughCanvas from './useDrawRoughCanvas';

const useRough = () => {
  const [options, setOptions] = useState(buildOptions());

  useInitializeCanvas();
  useDrawRoughCanvas(options);

  return {
    onClick: setOptions.bind(null, buildOptions()),
  };
};

export default useRough;
