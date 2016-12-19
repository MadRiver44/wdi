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

	divide(a,b){
		return a/b;
	}
	square(num1){
		return Math.pow(num1,2);
	}

	exponential(num1,num2) {
		return Math.pow(num1, num2);
	}

	isGreaterThan(num1,num2) {
		if (num1 > num2) return num1;
		else return num2;
	}

	isNegative(num){
		if (num<0){
			return true;
		}
		else return false;
	}
}
