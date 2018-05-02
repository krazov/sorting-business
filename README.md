# Sorting business

Repo dedicated to testing the speed of different sorting algorithms. Without any plan so far so project does only this and nothing more.

Each test sorts 1000 arrays of 1000 elements in three variants: random (non-repeating) numbers, ordered (optimistic), and reversed (pesimistic).

## Running test

Run `node ./test.js` in console of your chosen flavour while being in repo’s only folder. That’s on PC. On mac you have to manage on your own.

## Example result

```
Random array test
nativeSort        : 337.291ms
bubbleSort        : 16133.071ms
selectionSort     : 1070.825ms
insertionSort     : 3607.055ms
shellSort         : 114.142ms
mergeSortTopDown  : 100.180ms
mergeSortBottomUp : 1699.834ms
quickSortBasic    : 674.931ms

Ordered array test (optimistic)
nativeSort        : 291.216ms
bubbleSort        : 27.814ms
selectionSort     : 1177.224ms
insertionSort     : 18.157ms
shellSort         : 35.576ms
mergeSortTopDown  : 82.511ms
mergeSortBottomUp : 1653.728ms
quickSortBasic    : 13095.760ms

Reversed array test (pesimistic)
nativeSort        : 310.782ms
bubbleSort        : 15444.034ms
selectionSort     : 1165.121ms
insertionSort     : 8003.294ms
shellSort         : 43.399ms
mergeSortTopDown  : 80.866ms
mergeSortBottomUp : 1636.443ms
quickSortBasic    : 12351.613ms

Stale array test (the same value)
nativeSort        : 36.407ms
bubbleSort        : 25.876ms
selectionSort     : 1173.548ms
insertionSort     : 14.039ms
shellSort         : 32.262ms
mergeSortTopDown  : 81.303ms
mergeSortBottomUp : 1684.816ms
quickSortBasic    : 12534.264ms
```

## Credits

All the sorting algorithms were taken from [“Sorting algorithms in JavaScript, all the code”](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/) by [Benoît Vallon](https://twitter.com/benoitvallon) and ES6+’yfied by me.

(To be honest, I sucked at sorting algorithms at school and always had to cheat on exams, in this one particular area. Later, I actually felt cheated by teachers, upon learning that sorting is usually built into languages like C++ or PHP. But years later, as you can see, I decided to return to the subject.)

## TODO

* Array with repeating numbers
* Array with words