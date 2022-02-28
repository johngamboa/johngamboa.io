import useRough from '../../hooks/useRough';

function Circle() {
  useRough();

  return <canvas id="canvas" width={200} height={200} />;
}

export default Circle;
