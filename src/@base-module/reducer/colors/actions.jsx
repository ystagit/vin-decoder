import { COLORS } from './constants';

export const setColor = (style) =>
    ({ type: COLORS.SET, style })