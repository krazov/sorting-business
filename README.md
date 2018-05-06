# Sorting business

Repo dedicated to testing the speed of different sorting algorithms. Without any plan so far so project does only this and nothing more.

Each test sorts 1000 arrays of 1000 elements in three variants: random (non-repeating) numbers, ordered (optimistic), reversed (pesimistic), and random (non-repeating) converted to strings.

## Running test

Run `node ./test.js` in console of your chosen flavour while being in repo’s only folder. That’s on PC. On mac you have to manage on your own.

## Example result

```
Random array test
nativeSort        : 373.518ms
bubbleSort        : 15443.960ms
selectionSort     : 1077.694ms
insertionSort     : 3996.981ms
shellSort         : 114.666ms
mergeSortTopDown  : 101.943ms
mergeSortBottomUp : 1783.028ms
quickSortBasic    : 710.236ms

Ordered array test (optimistic)
nativeSort        : 311.655ms
bubbleSort        : 31.011ms
selectionSort     : 1262.124ms
insertionSort     : 19.374ms
shellSort         : 39.448ms
mergeSortTopDown  : 96.231ms
mergeSortBottomUp : 2030.329ms
quickSortBasic    : 13420.903ms

Reversed array test (pesimistic)
nativeSort        : 295.772ms
bubbleSort        : 16197.583ms
selectionSort     : 1180.940ms
insertionSort     : 8219.420ms
shellSort         : 48.845ms
mergeSortTopDown  : 85.151ms
mergeSortBottomUp : 1764.871ms
quickSortBasic    : 13223.443ms

Number->String array test (pesimistic)
nativeSort        : 27.328ms
bubbleSort        : 26.160ms
selectionSort     : 1234.431ms
insertionSort     : 13.868ms
shellSort         : 32.730ms
mergeSortTopDown  : 87.298ms
mergeSortBottomUp : 1785.494ms
quickSortBasic    : 12592.765ms

Array of random non-repeating numbers converted to strings
nativeSort        : 550.326ms
bubbleSort        : 35831.575ms
selectionSort     : 7316.510ms
insertionSort     : 10679.653ms
shellSort         : 411.332ms
mergeSortTopDown  : 128.057ms
mergeSortBottomUp : 1955.819ms
quickSortBasic    : 1117.293ms

```

## Credits

All the sorting algorithms were taken from [“Sorting algorithms in JavaScript, all the code”](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript-all-the-code/) by [Benoît Vallon](https://twitter.com/benoitvallon) and ES6+’yfied by me.

(To be honest, I sucked at sorting algorithms at school and always had to cheat on exams, in this one particular area. Later, I actually felt cheated by teachers, upon learning that sorting is usually built into languages like C++ or PHP. But years later, as you can see, I decided to return to the subject.)

## TODO

* Array with repeating numbers
* Array with words
* Algorithms accepting functions