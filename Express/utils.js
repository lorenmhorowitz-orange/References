const express = require('express');

const getElementById = (id, array) => {
    for (const i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return array[i];
        }
    }
    return -1;
};

const getIndexById = (id, array) => {
    for (const i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return i;
        }
    }
    return -1;
};

const updateElement = (id, object, array) => {
    // NEEDS WORK
    const arrayIndex = getIndexById(id, array);
    if (arrayIndex !== -1) {
        array[arrayIndex] = object;
        return array[arrayIndex];
    } else {
        return -1;
    }
};

const createElement = (array, object) => {
    // NEEDS WORK
};