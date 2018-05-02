const {
    generateRandom,
    generateOrdered,
    generateReversed,
    generateStale,
} = require('./generator');

const {
    nativeSort,
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
    mergeSortTopDown,
    mergeSortBottomUp,
    quickSortBasic,
} = require('./sorters');

const sorters = [
    nativeSort,
    bubbleSort, selectionSort, insertionSort, shellSort,
    mergeSortTopDown, mergeSortBottomUp,
    quickSortBasic
];

// touch of FP
const compose = (...functions) => (value) => functions.reduceRight((result, fn) => fn(result), value);

// names
const padValue = sorters.reduce((final, { name: { length } }) => final > length ? final : length, 0) + 1;

const paddedNames = sorters.reduce(
    (list, fn) => ({ ...list, [fn.name]: fn.name.padEnd(padValue) }), {}
);

// utils
const fnToObject = (fn) => ({ name: paddedNames[fn.name], fn });

const generateArray = (fn) => Array.from({ length: 1000 }, () => fn(1000));

const runTest = (arrays) => ({ name, fn }) => {
    console.time(name);
    arrays.forEach((array) => {
        fn(array.slice());
    });
    console.timeEnd(name);
};

const testerFn = compose(runTest, generateArray);

//const

// random _____________________________________________________________________________________________________________
console.log('Random array test');

sorters
    .map(fnToObject)
    .forEach(testerFn(generateRandom));

// ordered ____________________________________________________________________________________________________________
console.log('');
console.log('Ordered array test (optimistic)');

sorters
    .map(fnToObject)
    .forEach(testerFn(generateOrdered));

// reverse ____________________________________________________________________________________________________________
console.log('');
console.log('Reversed array test (pesimistic)');

sorters
    .map(fnToObject)
    .forEach(testerFn(generateReversed));

// stale ______________________________________________________________________________________________________________
console.log('');
console.log('Stale array test (the same value)');

sorters
    .map(fnToObject)
    .forEach(testerFn(generateStale));
