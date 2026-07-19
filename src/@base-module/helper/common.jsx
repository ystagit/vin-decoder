export const isEmptyString = (str) => {
    return (!str || 0 === str.length)
}

export const isEmptyArray = (array) => {
    return typeof array == 'undefined'
        || array == null
        || array.length == null
        || array.length == 0;
}

export const isEmpty = (obj) => {

    if (obj === null || obj === undefined) {
        return true
    }

    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false
        }
    }

    return JSON.stringify(obj) === JSON.stringify({})
}