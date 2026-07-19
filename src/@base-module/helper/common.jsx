export const isEmptyString = (str) => {
    return (!str || 0 === str.length)
}

export const isEmptyArray = (array) => {
    return typeof array == 'undefined'
        || array == null
        || array.length == null
        || array.length == 0;
}