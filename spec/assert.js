

var assert = {
  isTrue: function(testname, assertionToCheck) {
    if (assertionToCheck === true){
      console.log(testname + " passed!");
    }
    if (assertionToCheck === false) {
      throw new Error(testname + " failed: " + assertionToCheck + " is not truthy");
    }
  },

  isFalse: function(testname, assertionToCheck) {
    if (assertionToCheck === false){
      console.log(testname + " passed!");
    }
    if (assertionToCheck === true) {
      throw new Error(testname + " failed: " + assertionToCheck + " is not truthy");
    }
  }
};
