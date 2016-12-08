class Calculator {
	constructor() {}

  add(num1, num2){
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  square(num1) {
    return Math.pow(num1,2);
  }

  exponential(num1, num2) {
/*    let total = num1;
    for (let i=num2-1; i>0; i--) {
      total = (total*num1);
    }
    return total;*/
    return Math.pow(num1,num2);
  }

  isGreaterThan(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
    return num2;
   }
  }

  isNegative(num1) {
    return (num1 * (-1));
  }
}


