// algorithms taken from:
// http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/

const { floor, min } = Math;

// used by `bubbleSort` and `inscertionSort`
const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

// used by `shellSort`
const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

// used by `mergeSortTopDown`
const mergeTopDown = (left, right) => {
    const array = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    // if this would be 100% speed
    return array
        .concat(left.slice())
        .concat(right.slice());

    // then this returns 150%+
    return [...array, ...left.slice(), ...right.slice()];

};

const mergeBottomUp = (array, left, step) => {
    const right = left + step;
    const end = min(left + step * 2 - 1, array.length - 1);

    let leftMoving = left;
    let rightMoving = right;

    const temp = [];

    for (let i = left; i < end; i++) {
        if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) && leftMoving < right) {
            temp[i] = array[leftMoving];
            leftMoving += 1;
        } else {
            temp[i] = array[rightMoving];
            rightMoving += 1;
        }
    }

    for (let i = left; i <= end; i++) {
        array[i] = temp[i];
    }
};

const sorters = {
    nativeSort(array = []) {
        return array.sort();
    },

    // source: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-bubble-sort-algorithm
    bubbleSort(array = []) {
        const { length } = array;

        let swapped = false;

        do {
            swapped = false;

            for (let i = 0; i < length; i++) {
                if (array[i] != null && array[i + 1] != null && array[i] > array[i + 1]) {
                    swap(array, i, i + 1);
                    swapped = true;
                }
            }
        } while (swapped);

        return array;
    },

    // http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-selection-sort-algorithm
    selectionSort(array = []) {
        const { length } = array;

        for (let i = 0; i < length; i++) {
            let min = i;

            for (let j = i + 1; j < length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }

            if (i != min) {
                swap(array, i, min);
            }
        }

        return array;
    },

    // source: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-insertion-sort-algorithm/
    insertionSort(array = []) {
        const { length } = array;

        for (let i = 0; i < length; i++) {
            const temp = array[i];

            let j = i - 1;

            while (j >= 0 && array[j] > temp) {
                array[j - 1] = array[j];
                j--;
            }

            array[j + 1] = temp;
        }

        return array;
    },

    // source: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-shellsort-algorithm/
    shellSort(array = []) {
        const { length: gLength } = gaps;
        const { length: aLength } = array;

        for (let g = 0; g < gLength; g++) {
            let gap = gaps[g];

            for (let i = gap; i < aLength; i++) {
                const temp = array[i];

                let j = i;
                for (; j >= gap && array[j - gap] > temp; j -= gap) {
                    array[j] = array[j - gap];
                }

                array[j] = temp;
            }
        }

        return array;
    },

    // source: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-merge-sort-algorithm/
    mergeSortTopDown(array = []) {
        const { length } = array;

        if (length < 2) {
            return array;
        }

        const middle = floor(length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        return mergeTopDown(left, right);
    },

    mergeSortBottomUp(array = []) {
        const { length } = array;

        let step = 1;

        while (step < length) {
            let left = 0;

            while (left + step < length) {
                mergeBottomUp(array, left, step);
                left += step * 2;
            }

            step *= 2;
        }

        return array;
    },

    // source: http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/
    quickSortBasic(array = []) {
        const { length } = array;

        if (length < 2) {
            return array;
        }

        const pivot = array[0];
        const lesser = [];
        const greater = [];

        for (let i = 1; i < length; i++) {
            if (array[i] < pivot) {
                lesser.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }

        // TODO: [...1, ...2, ...3]
        return sorters.quickSortBasic(lesser)
            .concat(pivot, sorters.quickSortBasic(greater));
    }
};

module.exports = sorters;
