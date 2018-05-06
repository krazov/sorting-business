const { assign: extend, values } = Object;
const { log: println, time, timeEnd } = console;
const { max } = Math;
const { call } = Function.prototype;

// functional programming
const unary = (fn) => (argument) => fn(argument);

const compose = (...functions) => (value) => functions.reduceRight((result, fn) => fn(result), value);

const map = call.bind([].map);

const reduce = call.bind([].reduce);

const forEach = (array, fn) => {
    [].forEach.call(array, fn);
    return array;
};

// the rest
const findLonger = (final, { name: { length } }) =>
    max(final, length)

// TODO: check
const getSize2 = (sorters) =>
    max(...map(sorters, ({ name: { length } }) => length));

const getSize = (sorters) =>
    reduce(sorters, findLonger, 0) + 1;

const fnToObject = (names) => (fn) => {
    return ({ name: names[fn.name], fn })
};

const mapToObjects = (names) => (sorters) =>
    map(sorters, fnToObject(names));

const mapToLongName = (size) => ({ name }) =>
    ({
        [name]: name.padEnd(size)
    });

const standarizeNames = (reducer) => (sorters) =>
    reduce(sorters, (list, fn) => extend(list, reducer(fn)), {});

// --
const generateArray = (fn) => Array.from({ length: 1000 }, () => fn(1000));

const runTest = (arrays) => ({ name, fn }) => {
    time(name);

    forEach(arrays, (array) => {
        fn(array.slice());
    });

    timeEnd(name);
};

const testerFn = compose(runTest, generateArray);

const suiteRunnerFn = (sortersObj) => ({ messages, generator }) => {
    forEach(messages, unary(println));
    forEach(sortersObj, testerFn(generator));
};

// sorters -> fnSize -> sortersObj -> generatedArray -> test

module.exports = {
    compose,
    forEach,

    getRequireValues: compose(values, require),

    singleTest: (sorters) =>
        compose(
            suiteRunnerFn,
            mapToObjects(
                standarizeNames(
                    compose(
                        mapToLongName,
                        getSize
                    )(sorters)
                )(sorters)
            )
        )(sorters),
};
