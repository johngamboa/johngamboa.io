import { useEffect } from 'react';

import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants/canvasConstants';

const SCALE_FACTOR = 2;

const useInitializeCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    if (canvas.width !== CANVAS_WIDTH) return;

    canvas.style.width = `${CANVAS_WIDTH}px`;
    canvas.style.height = `${CANVAS_HEIGHT}px`;

    canvas.width = Math.ceil(CANVAS_WIDTH * SCALE_FACTOR);
    canvas.height = Math.ceil(CANVAS_HEIGHT * SCALE_FACTOR);

    ctx.scale(SCALE_FACTOR, SCALE_FACTOR);
  }, []);
};

export default useInitializeCanvas;
