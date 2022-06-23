//create a test fn that I can call to check the assertEquals is working

//realised I don't actually need this since the fn we're testing is the equals fn itself
function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd();
  }

  //the assertEquals I need to make work
  
  /*first attempt:

  "assertEquals returns 'No error' when two identical strings are passed"
  */

  //first deliberately make the fn wrong so it fails the initail test in line 22 (i.e checking for false positives)
  function assertEquals(expect, actual) {
      if(expect === actual) {console.error(`Expected "${expect}" but found "${actual}"`);}
      else {console.info(`No error`);}
  }

  assertEquals("abc", "abc");