import { useState, useEffect } from 'react';
import { RoughCanvas } from 'roughjs/bin/canvas';
import rough from 'roughjs/bin/rough';

import { PURPLE } from '../constants/colors';
import { HACHURE, FILL_STYLES } from '../constants/fillStyles';

const MAX_ROUGHNESS = 10;
const MAX_BOWING = 10;
const MAX_STROKE_WIDTH = 5;
const MAX_HACHURE_ANGLE = 90;

const CIRCLE_X = 90;
const CIRCLE_Y = 90;
const CIRCE_DIAMETER = 60;

const RECTANGLE_X = 60;
const RECTANGLE_Y = 60;
const RECTANGLE_LENGTH = 60;

const MAX_COLORS = 16777215;
const HEX = 16;

const SCALE_FACTOR = 2;

const useRough = () => {
  const [seed, setSeed] = useState(1);
  const [roughness, setRoughness] = useState(Math.random() * MAX_ROUGHNESS);
  const [fill, setFill] = useState(PURPLE);
  const [fillStyle, setFillStyle] = useState(HACHURE);
  const [stroke, setStroke] = useState(PURPLE);
  const [strokeWidth, setStrokeWidth] = useState(1);
  const [bowing, setBowing] = useState(0);
  const [simplification, setSimplification] = useState(1);
  const [hachureAngle, setHachureAngle] = useState(-41);

  const updateCircle = () => {
    setSeed(Math.floor(Math.random() * 2 ** 31));
    setRoughness(Math.round(Math.random() * MAX_ROUGHNESS));
    setFill(`#${Math.floor(Math.random() * MAX_COLORS).toString(HEX)}`);
    setFillStyle(FILL_STYLES[Math.floor(Math.random() * FILL_STYLES.length)]);
    setStroke(`#${Math.floor(Math.random() * MAX_COLORS).toString(HEX)}`);
    setStrokeWidth(Math.ceil(Math.random() * MAX_STROKE_WIDTH));
    setBowing(Math.floor(Math.random() * MAX_BOWING));
    setSimplification(Math.random());
    setHachureAngle(
      (Math.random() < 0.5 ? -1 : 1) *
        Math.floor(Math.random() * MAX_HACHURE_ANGLE)
    );
  };

  useEffect(updateCircle, []);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.style.width = canvas.style.width || `${canvas.width}px`;
    canvas.style.height = canvas.style.height || `${canvas.height}px`;

    canvas.width = Math.ceil(canvas.width * SCALE_FACTOR);
    canvas.height = Math.ceil(canvas.height * SCALE_FACTOR);

    context.scale(SCALE_FACTOR, SCALE_FACTOR);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas) as RoughCanvas;

    const options = {
      seed,
      fill,
      roughness,
      fillStyle,
      stroke,
      strokeWidth,
      bowing,
      simplification,
      hachureAngle,
    };

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
  }, [
    seed,
    fill,
    roughness,
    fillStyle,
    stroke,
    strokeWidth,
    bowing,
    simplification,
    hachureAngle,
  ]);

  return {
    onClick: updateCircle,
  };
};

export default useRough;
