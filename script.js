//create a test fn that I can call to check the assertEquals is working

function test(name, testFunction) {
    console.group(name);
    testFunction();
    console.groupEnd();
  }