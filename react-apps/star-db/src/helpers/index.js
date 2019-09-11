export const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
};

export const compose = (...funcs) => (component) => funcs.reduceRight((prevResult, func) => func(prevResult), component);