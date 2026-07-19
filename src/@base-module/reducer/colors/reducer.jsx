import { COLORS } from './constants';
import data from '@base/assets/colors';

const getColorData = (style) => ({
    ...data.main,
    ...(data[style] ?? data.light ?? {})
})

const colors = (state = {}, action) => {

  switch (action.type) {
        case COLORS.SET:
            return getColorData(action.style);
  }

  return state;
}

export default colors;