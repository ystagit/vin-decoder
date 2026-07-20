import StorageErrors from './storage-errors';
import storages from '@/storages'

const existsByType = (type) => !!storages?.[type];

const buildItem = (type, data) =>
    existsByType(type) ? {
        type,
        model: {
            [type]: data
        }
    } : null;


export const save = (type, data) =>
    new Promise((resolve, reject) => {
        const item = buildItem(type, data);
        if (item) {
            if (typeof item.model === 'object') {
                localStorage.setItem(item.type, JSON.stringify(item.model));
                console.info("Storage:: Saved item: ", item);
                resolve(item.model);
            } else {
                reject(StorageErrors.INVALID_MODEL_TYPE);
            }
        } else {
            reject(StorageErrors.NO_TYPE);
        }
    });

export const remove = (type) =>
    new Promise((resolve, reject) => {
        if (existsByType(type)) {
            const item = localStorage.getItem(type);

            if (item) {
                localStorage.removeItem(type);
                console.info("Storage:: Removed item by type: ", type);
                resolve(item);
            }
        } else {
            reject(StorageErrors.NO_TYPE);
        }
    });

export const get = (type) =>
    new Promise((resolve, reject) => {
        if (existsByType(type)) {
            let item = localStorage.getItem(type);

            if (item) {
                item = JSON.parse(item);
                console.info("Storage:: Got item: ", item);
                resolve(item);
            } else {
                resolve(null);
            }
        } else {
            reject(StorageErrors.NO_TYPE);
        }
    });