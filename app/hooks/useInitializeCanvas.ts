import { useEffect } from 'react';

const SCALE_FACTOR = 2;

const useInitializeCanvas = (): void => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.style.width = canvas.style.width || `${canvas.width}px`;
    canvas.style.height = canvas.style.height || `${canvas.height}px`;

    canvas.width = Math.ceil(canvas.width * SCALE_FACTOR);
    canvas.height = Math.ceil(canvas.height * SCALE_FACTOR);

    context.scale(SCALE_FACTOR, SCALE_FACTOR);
  }, []);
};

export default useInitializeCanvas;
