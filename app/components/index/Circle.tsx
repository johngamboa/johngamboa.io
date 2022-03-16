import useRough from '../../hooks/useRough';

import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../../constants/canvasConstants';

function Circle() {
  const { onClick } = useRough();

  return (
    <canvas
      id="canvas"
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default Circle;
