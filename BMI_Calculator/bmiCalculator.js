function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    let interpretation;
  
    if (bmi < 18.5) {
      interpretation = 'Your BMI is ${bmi}, so you are underweight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
      interpretation = `Your BMI is ${bmi}, so you are overweight.`;
    }
  
    return interpretation;
  }
console.log(bmiCalculator(50, 1.6)); // Output: "Your BMI is 19.53, so you have a normal weight."
console.log(bmiCalculator(70, 1.7)); // Output: "Your BMI is 24.22, so you have a normal weight."
console.log(bmiCalculator(90, 1.8)); // Output: "Your BMI is 27.78, so you are overweight."

// C:\Program Files\nodejs\