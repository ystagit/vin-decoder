import { LoaderType } from './loader-type';

export const isMainLoader = (state) => state.loader[LoaderType.MAIN].visible;