import { COLORS } from './constants';

export const initColor = (style) =>
    ({ type: COLORS.INIT })

export const setColor = (theme) =>
    ({ type: COLORS.SET, theme })