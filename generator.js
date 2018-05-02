const { floor, random } = Math;

const randomFromRange = (max) => floor(random() * max);

const findUnique = (max, array) => {
    do {
        const x = randomFromRange(max * 10);

        if (!array.includes(x)) {
            return x;
        }
    }
    while (true);
};

const fillVaried = (final, _1, _2, array) =>
    (final.push(findUnique(array.length, final)), final);

module.exports = {
    generateRandom(length) {
        return Array
            .from({ length })
            .reduce(fillVaried, []);
    },

    generateOrdered(length) {
        return Array
            .from({ length }, (_, index) => index);
    },

    generateReversed(length) {
        return Array
            .from({ length }, (_, index) => index)
            .reverse();
    },

    generateStale(length) {
        return Array
            .from({ length }, () => 1);
    },
}
