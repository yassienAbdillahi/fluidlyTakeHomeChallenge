# fluidlyTakeHomeChallenge
An "assertEquals" method to demonstrate problem solving and understanding of JavaScript


### To do

- [x] Fill in the "assertEquals" function provided such that it will correctly compare the "expected" and "actual" parameters.
- [x] Ensure the function works for primitive data types (e.g. strings and numbers) and simple arrays


### Example inputs and outputs

| Expected        |     Actual      |                                                                 Result |
| --------------- | :-------------: | ---------------------------------------------------------------------: |
| "abc"           |      "abc"      |                                                             _No error_ |
| "abcef"         |      "abc"      |           Throws error with message 'Expected "abcef" but found "abc"' |
| 1               |        1        |                                                             _No error_ |
| 1               |        2        |                     Throws error with message 'Expected 1 but found 2' |
| 1               |       '1'       | Throws error with message 'Expected type number but found type string' |
| ['a', 'b', 'c'] | ['a', 'b', 'c'] |                                                             _No error_ |
| ['a', 'b']      | ['a', 'b', 'c'] |        Throws error with message 'Expected array length 2 but found 3' |
| ['a', 'b']      |   ['a', 'd']    |                 Throws error with message 'Expected "b" but found "d"' |
