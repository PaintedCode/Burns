
describe("factorial", function() {

  it("Returns the factorial of 5 = 120", function() {
    var factorialFive = factorial(5);
    expect(factorialFive).toEqual(120);
  });
})


describe("gcd", function() {

  it("find the greatest common divisor", function() {
    var gcdTest= gcd(2154,458);
    expect(gcdTest).toEqual(2);
  });
})


describe("range", function() {

  it("Returns an array [3,4,5,6,7,8]", function() {
    var rangeTest = range(2,9);
    expect(rangeTest).toEqual([3,4,5,6,7,8]);
  });
})

describe("sumArray", function() {

  it("Compute the sum of an array of integers", function() {
    var sumArrayTest = sumArray([1, 2, 3, 4, 5, 6]);
    expect(sumArrayTest).toEqual(21);
  });
})

describe("exponent", function() {

  it("Compute the exponent of a number", function() {
    var exponentTest = exponent(8,2);
    expect(exponentTest).toEqual(64);
    var exponentTest = exponent(8,3);
    expect(exponentTest).toEqual(512);
  });
})


describe("fibonacciArray", function() {

  it("Return array of the first n Fibonacci numbers", function() {
    var fibonacciArrayTest = fibonacciArray(8);
    expect(fibonacciArrayTest).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);

  });
})

describe("fibonacci", function() {

  it("Get the Fibonacci number at postion n", function() {
    var fibonacciTest = fibonacci(8);
    expect(fibonacciTest).toEqual(21);
  });
})


describe("even", function() {

  it("Check whether a number is even or not", function() {
    var evenTest = even(8);
    expect(evenTest).toEqual(true);
    var evenTest = even(7);
    expect(evenTest).toEqual(false);
  });
})

describe("binary", function() {

  it("Check whether a number is binary", function() {
    var binaryTest = binary(5);
    expect(binaryTest).toEqual(5);
  });
})

describe("smallestInt ", function() {

  it("Return the smallest integer in an array", function() {
    var smallestIntTest = smallestInt([34,7,23,32,5,62]);
    expect(smallestIntTest).toEqual(5);
  });
})

describe("flatten", function() {

  it("Flatten the array", function() {
    var flattenTest = flatten([1, 2, 3,[4, 5],6]);
    expect(flattenTest).toEqual([1,2,3,4,5,6]);
  });
})

describe("reverseStr", function() {

  it("Reverse a string", function() {
    var reverseStrTest = reverseStr('hello');
    expect(reverseStrTest).toEqual('olleh');
    var reverseStrTest = reverseStr('');
    expect(reverseStrTest).toEqual('');
    var reverseStrTest = reverseStr('kayak');
    expect(reverseStrTest).toEqual('kayak');
  });
})

describe("digitCounter", function() {

  it("digitCounter", function() {
    var digitCounterTest = digitCounter(123332,1);
    expect(digitCounterTest).toEqual(1);
    var digitCounterTest = digitCounter(123332,2);
    expect(digitCounterTest).toEqual(2);
    var digitCounterTest = digitCounter(1233321,3);
    expect(digitCounterTest).toEqual(3);
  });
})

describe("Removing characters that occur more than once", function() {

  it("removeChar", function() {
    var removeCharTest = removeChar('hheelloo');
    expect(removeCharTest).toEqual('helo');
  });
})

describe("return an array from an object using map", function() {

  it("arrayObject", function() {
    var arrayObjectTest = arrayObject({name1:{first:'jeff',last:'burns'},name2:{first:'ann',last:'friedman'}});
    expect(arrayObjectTest).toEqual(['name1 = jeff', 'name2 = ann']);
  });
})

describe("reverse using recursion", function() {

  it("reverse", function() {
    var reverseTest = reverse('hello');
    expect(reverseTest).toEqual('olleh');
    var reverseTest = reverse('kayak');
    expect(reverseTest).toEqual('kayak');
  });
})
describe("palindrome using reverse", function() {

  it("palindrome", function() {
    var palindromeTest = palindrome('hello');
    expect(palindromeTest).toEqual(false);
    var palindromeTest = palindrome('kayak');
    expect(palindromeTest).toEqual(true);
  });
})

// describe("decoratedFunc", function() {

//   it("callDecoratedFunc", function() {
//     var test = callDecoratedFunc(3,4,5,function(a,b) {return a+b});
//     expect(test).toEqual(27);
  
//   });
// })

// describe("closure", function() {

//   it("closure", function() {
//     var test = closure(4);
//     expect(test).toEqual(2);
  
//   });
// })

describe("reverse using recursion", function() {

  it("reverseMe", function() {
    var reverseTest = reverseMe('hello');
    expect(reverseTest).toEqual('olleh');
    var reverseTest = reverseMe('kayak');
    expect(reverseTest).toEqual('kayak');
  });
})


describe("pal using reverse", function() {

  it("pal", function() {
    var palindromeTest = pal('hello');
    expect(palindromeTest).toEqual(false);
    var palindromeTest = pal('kayak');
    expect(palindromeTest).toEqual(true);
  });
})

// describe("run3X", function() {
//   it("pal", function() {
//     var test = run3X(consoleLog,'hello');
//     expect(test).toEqual(false);
//     var test = run3X('kayak');
//     expect(test).toEqual(true);
//   })
// })


describe("reverse using recursion", function() {

  it("rev", function() {
    var reverseTest = rev('hello');
    expect(reverseTest).toEqual('olleh');
    var reverseTest = rev('kayak');
    expect(reverseTest).toEqual('kayak');
  });
})