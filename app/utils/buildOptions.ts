import Options from '../types/Options';

import { FILL_STYLES } from '../constants/fillStyles';

import {
  MAX_ROUGHNESS,
  MAX_BOWING,
  MAX_STROKE_WIDTH,
  MAX_HACHURE_ANGLE,
  MAX_COLORS,
} from '../constants/maxOptionValues';

const buildSeed = (): number => Math.floor(Math.random() * 2 ** 31);

const buildRoughness = (): number => Math.round(Math.random() * MAX_ROUGHNESS);

const buildFill = (): string =>
  `#${Math.floor(Math.random() * MAX_COLORS).toString(16)}`;

const buildFillStyle = (): string =>
  FILL_STYLES[Math.floor(Math.random() * FILL_STYLES.length)];

const buildStroke = (): string =>
  `#${Math.floor(Math.random() * MAX_COLORS).toString(16)}`;

const buildStrokeWidth = (): number =>
  Math.ceil(Math.random() * MAX_STROKE_WIDTH);

const buildBowing = (): number => Math.floor(Math.random() * MAX_BOWING);

const buildSimplification = (): number => Math.random();

const buildHachureAngle = (): number =>
  (Math.random() < 0.5 ? -1 : 1) *
  Math.floor(Math.random() * MAX_HACHURE_ANGLE);

const buildOptions = (): Options => ({
  seed: buildSeed(),
  roughness: buildRoughness(),
  fill: buildFill(),
  fillStyle: buildFillStyle(),
  stroke: buildStroke(),
  strokeWidth: buildStrokeWidth(),
  bowing: buildBowing(),
  simplification: buildSimplification(),
  hachureAngle: buildHachureAngle(),
});

export default buildOptions;
