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
  */
 
  // "assertEquals logs 'No error' when two identical strings are passed"
  assertEquals("abc", "abc"); 

  // "assertEquals throws error with message 'Expected "abc" but found "def"'
  assertEquals("abc", "def");

  // "assertEquals throws error with message 'Expected "abcef" but found "abc"'
  assertEquals("abcef", "abc");



  //next need to make sure the fn works for numbers

  //"assertEquals logs 'No error' when two identical numberss are passed"
  assertEquals(1, 1); //test passes so no refactoring necessary yet


  // "assertEquals throws error with message 'Expected 1 but found 2'
  assertEquals(1, 2); //test throws the error but with slightly wrong message (are the "" important?)

  //assertEquals Throws error with message 'Expected type number but found type string'
  assertEquals(1, '1'); //wrong error message is thrown so need to refactor


  //second refactor to change the error messages
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
 