import useRough from '../../hooks/useRough';

const CANVAS_WIDTH = 180;
const CANVAS_HEIGHT = 180;

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
