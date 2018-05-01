# Sorting business

Repo dedicated to testing the speed of different sorting algorithms. Without any plan so far so project does only this and nothing more.

Each test sorts 1000 arrays of 1000 elements in three variants: random (non-repeating) numbers, ordered (optimistic), and reversed (pesimistic).

## Running test

Run `node ./test.js` in console of your chosen flavour while being in repo’s only folder. That’s on PC. On mac you have to manage on your own.

## Example result

```
Random array test
nativeSort        : 334.912ms
bubbleSort        : 14887.486ms
selectionSort     : 1129.620ms
insertionSort     : 3740.700ms
shellSort         : 147.348ms
mergeSortTopDown  : 98.120ms
mergeSortBottomUp : 1862.713ms
quickSortBasic    : 727.695ms

Ordered array test (optimistic)
nativeSort        : 330.581ms
bubbleSort        : 40.537ms
selectionSort     : 1570.100ms
insertionSort     : 19.364ms
shellSort         : 40.716ms
mergeSortTopDown  : 87.172ms
mergeSortBottomUp : 1689.438ms
quickSortBasic    : 13956.349ms

Reversed array test (pesimistic)
nativeSort        : 351.167ms
bubbleSort        : 15594.825ms
selectionSort     : 1151.056ms
insertionSort     : 7896.931ms
shellSort         : 46.949ms
mergeSortTopDown  : 91.082ms
mergeSortBottomUp : 1945.847ms
quickSortBasic    : 12597.508ms
```

## TODO

* Array with repeating numbers
* Array with words