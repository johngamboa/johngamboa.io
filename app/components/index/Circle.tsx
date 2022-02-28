import useRough from '../../hooks/useRough';

const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 180;

function Circle() {
  useRough();

  return <canvas id="canvas" width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />;
}

export default Circle;
