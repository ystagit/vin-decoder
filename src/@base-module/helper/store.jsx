import store from '@/store';
import StorageType from '@/storages';

export const getLastThreeVinList = () =>
    store.getState().storage[StorageType.LAST_THREE_VIN] ?? [];