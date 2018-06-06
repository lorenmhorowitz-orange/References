
export const getElementById = (id, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return array[i];
        }
    }
    return -1;
};

export const getIndexById = (id, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return i;
        }
    }
    return -1;
};

export const updateElement = (id, query, array) => {
    // Only applicable to intern objects.
    const arrayIndex = getIndexById(id, array);
    if (arrayIndex !== -1) {
        array[arrayIndex].name = query.name;
        array[arrayIndex].id = id;
        array[arrayIndex].age = query.age;
        array[arrayIndex].title = query.title;
        return array[arrayIndex];
    } else {
        return -1;
    }
};

export const createElement = (array, query) => {
    const newIntern = {
        id:     query.id,
        name:   query.name,
        age:    query.age,
        title:  query.title
    };
    return newIntern;
};