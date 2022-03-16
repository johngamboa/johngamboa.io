import { useEffect } from 'react';
import { RoughCanvas } from 'roughjs/bin/canvas';
import rough from 'roughjs/bin/rough';

import Options from '../types/Options';

import {
  CIRCLE_X,
  CIRCLE_Y,
  CIRCE_DIAMETER,
  RECTANGLE_X,
  RECTANGLE_Y,
  RECTANGLE_LENGTH,
} from '../constants/shapeConstants';

const useDrawRoughCanvas = (options: Options): void =>
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas) as RoughCanvas;

    if (Math.random() < 0.5) {
      roughCanvas.circle(CIRCLE_X, CIRCLE_Y, CIRCE_DIAMETER, options);
    } else {
      roughCanvas.rectangle(
        RECTANGLE_X,
        RECTANGLE_Y,
        RECTANGLE_LENGTH,
        RECTANGLE_LENGTH,
        options
      );
    }
  }, [options]);

export default useDrawRoughCanvas;
