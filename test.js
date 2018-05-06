const { getRequireValues, forEach, singleTest } = require('./utils');

const {
    generateRandom,
    generateOrdered,
    generateReversed,
    generateStale,
    generateStrings,
} = require('./generators');

const sorters = getRequireValues('./sorters');

const testCases = [
    {
        messages: ['Random array test'],
        generator: generateRandom,
    },
    {
        messages: ['', 'Ordered array test (optimistic)'],
        generator: generateOrdered,
    },
    {
        messages: ['', 'Reversed array test (pesimistic)'],
        generator: generateReversed,
    },
    {
        messages: ['', 'Arrays of repeating number 1 (stale)'],
        generator: generateStale,
    },
    {
        messages: ['', 'Arrays of random non-repeating numbers converted to strings'],
        generator: generateStrings,
    },
];

// and run
forEach(testCases, singleTest(sorters));
