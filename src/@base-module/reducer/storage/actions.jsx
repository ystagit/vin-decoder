import { STORAGE } from './constants';


const createStorageConfig = (type, mode) => ({ type, model })

const createStorageAction = (type, entityType, entityModel, callback) => ({
    type,
    storageConfig: createStorageConfig(entityType, entityModel),
    callback
})

// Save data in local storage
export const saveItem = (type, model) =>
    createStorageAction(STORAGE.SAVE.REQUEST, type, model);

// Remove data from local storage
export const removeItem = (type) =>
    createStorageAction(STORAGE.REMOVE.REQUEST, type);

// Get data from local storage
export const getItem = (type, callback) =>
    createStorageAction(STORAGE.GET.REQUEST, type, null, callback);

// Set data in just reducer
export const setItem = (type, data) =>
    ({ type: STORAGE.SET, itemType: type, data });

export const cleanItem = (type, data) =>
    ({ type: STORAGE.CLEAN, itemType: type });