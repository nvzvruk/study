export const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

export const getImageUrl = (entity, id) => {
    return `https://starwars-visualguide.com/assets/img/${entity}/${id}.jpg`;
};