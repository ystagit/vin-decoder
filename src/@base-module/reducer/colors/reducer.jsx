import { COLORS } from './constants';
import data from '@base/assets/colors';

const getColorData = (theme) => ({
    ...data.main,
    ...(data[theme] ?? data.light ?? {})
})

const colors = (state = {}, action) => {

  switch (action.type) {
        case COLORS.SET:
            const colors = getColorData(action.theme);
            document.querySelector('body').style.background = colors.background;
            return colors;
  }

  return state;
}

export default colors;