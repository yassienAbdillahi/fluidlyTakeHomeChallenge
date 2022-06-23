//create a test fn that I can call to check the assertEquals is working

//realised I don't actually need this since the fn we're testing is the equals fn itself
function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd();
  }

  //the assertEquals I need to make work

  /*first attempt:

  "assertEquals logs 'No error' when two identical strings are passed"
  

  //first deliberately make the fn wrong so it fails the initail test in line 22 (i.e checking for false positives)
  function assertEquals(expect, actual) {
      if(expect === actual) {console.error(`Expected "${expect}" but found "${actual}"`);}
      else {console.info(`No error`);}
  }

  assertEquals("abc", "abc");
  */

  /* first refactor; to make the same test pass
  function assertEquals(expect, actual) {
    if(expect === actual) {console.info(`No error`);} 
    else {console.error(`Expected "${expect}" but found "${actual}"`);}
  }
  
 
  // "assertEquals logs 'No error' when two identical strings are passed"
  assertEquals("abc", "abc"); 

  // "assertEquals throws error with message 'Expected "abc" but found "def"'
  assertEquals("abc", "def");

  // "assertEquals throws error with message 'Expected "abcef" but found "abc"'
  assertEquals("abcef", "abc");
  


  //next need to make sure the fn works for numbers

  //"assertEquals logs 'No error' when two identical numbers are passed"
  assertEquals(1, 1); //test passes so no refactoring necessary yet


  // "assertEquals throws error with message 'Expected 1 but found 2'
  assertEquals(1, 2); //test throws the error but with slightly wrong message (are the "" important?)

  //assertEquals Throws error with message 'Expected type number but found type string'
  assertEquals(1, '1'); //wrong error message is thrown so need to refactor
  */

  //second refactor to change the error messages
  /*
  function assertEquals(expect, actual) {
    let a = typeof actual;
    let e = typeof expect;

    if (a !== e) {
        if (e === "string") {console.error(`Expected type string but found type ${a}`);}
        else if (e === "number") {console.error(`Expected type number but found type ${a}`);}
    }

    else if(expect === actual) {console.info(`No error`);} 
    else {console.error(`Expected ${expect} but found ${actual}`);}
  }
  

  //next need to make sure the fn works for arrays

  //"assertEquals logs 'No error' when two identical arrays are passed"
  assertEquals(['a', 'b', 'c'], ['a', 'b', 'c']); //test fails so need to refactor
  //the reason it fails is because arrays are objects and comparing two objects always returns false
  */
  
//third refactor to deal with simple arrays
/*
function assertEquals(testName, expect, actual) {
    console.group(testName);

    let a = typeof actual;
    let e = typeof expect;

    let aArrayCheck = Array.isArray(actual);
    let eArrayCheck = Array.isArray(expect);

    if(
        (aArrayCheck === true) && (eArrayCheck === true)
    ) {
        let emptyArray = [];
        let mismatchesArray = [];
        let mismatchedIndexArray = [];

        for(let i = 0; i < actual.length; i++) {
            if(expect[i] === actual[i]) {emptyArray.push(`element ${i} matches`);}
            else {
                mismatchesArray.push(actual[i]);
                mismatchedIndexArray.push(i);
            }
        }
        if(emptyArray.length === expect.length) {console.info(`No error`);}
        else {
            for(let i =0; i < mismatchesArray.length; i++){
                console.error(`Expected ${expect[mismatchedIndexArray[i]]} but found ${mismatchesArray[i]}`);
            }
        }
    }

    else if (a !== e) {
        if (e === "string") {console.error(`Expected type string but found type ${a}`);}
        else if (e === "number") {console.error(`Expected type number but found type ${a}`);}
    }

    else if(expect === actual) {console.info(`No error`);} 
    else {console.error(`Expected ${expect} but found ${actual}`);}


    console.groupEnd();
  }

  // "assertEquals logs 'No error' when two identical strings are passed"
  assertEquals("assertEquals logs 'No error' when two identical strings are passed", "abc", "abc"); 

  // "assertEquals throws error with message Expected abc but found def"
  assertEquals("assertEquals throws error with message Expected abc but found def", "abc", "def");

  // "assertEquals throws error with message Expected abcef but found abc"
  assertEquals("assertEquals throws error with message Expected abcef but found abc", "abcef", "abc");

  //"assertEquals logs 'No error' when two identical numbers are passed"
  assertEquals("assertEquals logs 'No error' when two identical numbers are passed", 1, 1); //test passes so no refactoring necessary yet

  // "assertEquals throws error with message Expected 1 but found 2"
  assertEquals("assertEquals throws error with message Expected 1 but found 2", 1, 2); //test throws the error but with slightly wrong message (are the "" important?)

  //assertEquals Throws error with message 'Expected type number but found type string'
  assertEquals("assertEquals Throws error with message Expected type number but found type string", 1, '1'); //wrong error message is thrown so need to refactor
  
  //"assertEquals logs 'No error' when two identical arrays are passed"
  assertEquals("assertEquals logs 'No error' when two identical arrays are passed", ['a', 'b', 'c'], ['a', 'b', 'c']);

  //assertEquals Throws error with message Expected b but found d
  assertEquals("assertEquals Throws error with message Expected b but found d", ['a', 'b'], ['a', 'd']);

  //assertEquals Throws error with message Expected array length 2 but found 3
  assertEquals("assertEquals Throws error with message Expected array length 2 but found 3", ['a', 'b'], ['a', 'b', 'c']);
  //this test does not throw an error so need to refactor
  */


  //fourth refactor to deal with comparing arrays of different length
  function assertEquals(testName, expect, actual) {
    console.group(testName);

    let a = typeof actual;
    let e = typeof expect;

    let aArrayCheck = Array.isArray(actual);
    let eArrayCheck = Array.isArray(expect);

    if(
        (aArrayCheck === true) && (eArrayCheck === true)
    ) {
        let emptyArray = [];
        let mismatchesArray = [];
        let mismatchedIndexArray = [];

        for(let i = 0; i < actual.length; i++) {
            if(expect[i] === actual[i]) {emptyArray.push(`element ${i} matches`);}
            else {
                mismatchesArray.push(actual[i]);
                mismatchedIndexArray.push(i);
            }
        }
        if(
            (emptyArray.length === expect.length) && (expect.length === actual.length)
            ) {console.info(`No error`);}
        else if (expect.length !== actual.length) {
            console.error(`Expected array length ${expect.length} but found ${actual.length}`);
        }   
        else {
            for(let i =0; i < mismatchesArray.length; i++){
                console.error(`Expected ${expect[mismatchedIndexArray[i]]} but found ${mismatchesArray[i]}`);
            }
        }
    }

    else if (a !== e) {
        if (e === "string") {console.error(`Expected type string but found type ${a}`);}
        else if (e === "number") {console.error(`Expected type number but found type ${a}`);}
    }

    else if(expect === actual) {console.info(`No error`);} 
    else {console.error(`Expected ${expect} but found ${actual}`);}


    console.groupEnd();
  }

  // "assertEquals logs 'No error' when two identical strings are passed"
  assertEquals("assertEquals logs 'No error' when two identical strings are passed", "abc", "abc"); 

  // "assertEquals throws error with message Expected abc but found def"
  assertEquals("assertEquals throws error with message Expected abc but found def", "abc", "def");

  // "assertEquals throws error with message Expected abcef but found abc"
  assertEquals("assertEquals throws error with message Expected abcef but found abc", "abcef", "abc");

  //"assertEquals logs 'No error' when two identical numbers are passed"
  assertEquals("assertEquals logs 'No error' when two identical numbers are passed", 1, 1); //test passes so no refactoring necessary yet

  // "assertEquals throws error with message Expected 1 but found 2"
  assertEquals("assertEquals throws error with message Expected 1 but found 2", 1, 2); //test throws the error but with slightly wrong message (are the "" important?)

  //assertEquals Throws error with message 'Expected type number but found type string'
  assertEquals("assertEquals Throws error with message Expected type number but found type string", 1, '1'); //wrong error message is thrown so need to refactor
  
  //"assertEquals logs 'No error' when two identical arrays are passed"
  assertEquals("assertEquals logs 'No error' when two identical arrays are passed", ['a', 'b', 'c'], ['a', 'b', 'c']);

  //assertEquals Throws error with message Expected b but found d
  assertEquals("assertEquals Throws error with message Expected b but found d", ['a', 'b'], ['a', 'd']);

  //assertEquals Throws error with message Expected array length 2 but found 3
  assertEquals("assertEquals Throws error with message Expected array length 2 but found 3", ['a', 'b'], ['a', 'b', 'c']);
 