import { STORAGE } from './constants';

const storage = (state = {}, action) => {

    switch (action.type) {
        case STORAGE.SET:
            return {
                ...state,
                [action.itemType]: action.data
            }
        case STORAGE.GET.SUCCESS:
        case STORAGE.SAVE.SUCCESS:
            return {
                ...state,
                ...action.item?.model ?? {}
            };
        case STORAGE.CLEAN:
            state = { ...state };
            state[action.itemType] = null;
            return state;
        case STORAGE.REMOVE.SUCCESS:
            const clonedState = { ...state };

            for (let key in action.item.model) {
                if (clonedState[key]) {
                    clonedState[key] = null;
                }
            }

        return clonedState;
    }

    return state;
}

export default storage;