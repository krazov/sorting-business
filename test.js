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
        messages: ['', 'Number->String array test (pesimistic)'],
        generator: generateStale,
    },
    {
        messages: ['', 'Array of random non-repeating numbers converted to strings'],
        generator: generateStrings,
    },
];

// and run
forEach(testCases, singleTest(sorters));
//testCases.forEach(compose(suiteRunnerFn, sorters.map(fnToObject(paddedNames))));
