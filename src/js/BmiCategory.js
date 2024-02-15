const BMI_BOUNDS = {
  UNDERWEIGHT: { lower: 16, upper: 18.5, adjustment: 0 },
  NORMAL: { lower: 18.5, upper: 25, adjustment: 0.2 },
  OVERWEIGHT: { lower: 25, upper: 30, adjustment: 0.4 },
  OBESE: { lower: 30, upper: 35, adjustment: 0.6 },
  EXTREMELY_OBESE: { lower: 35, upper: 40, adjustment: 0.8 },
};

class BmiCategory {
  constructor(bmi) {
    this.bmi = bmi;
  }

  calculateGage() {
    throw new Error("This method should be implemented by subclasses");
  }

  static getCategory(bmi) {
    if (bmi < 18.5) {
      return new Underweight(bmi);
    } else if (bmi >= 18.5 && bmi < 25) {
      return new Normal(bmi);
    } else if (bmi >= 25 && bmi < 30) {
      return new Overweight(bmi);
    } else if (bmi >= 30 && bmi < 35) {
      return new Obese(bmi);
    } else if (bmi >= 35) {
      return new ExtremelyObese(bmi);
    }
  }

  getPercentage(lowerBound, upperBound, segmentAdjustment) {
    return (
      (this.bmi - lowerBound) / (upperBound - lowerBound) / 5 +
      segmentAdjustment
    );
  }
}

class Underweight extends BmiCategory {
  calculateGage() {
    const { lower, upper, adjustment } = BMI_BOUNDS.UNDERWEIGHT;
    return this.getPercentage(lower, upper, adjustment);
  }
  getTitle() {
    return "Underweight";
  }
}

class Normal extends BmiCategory {
  calculateGage() {
    const { lower, upper, adjustment } = BMI_BOUNDS.NORMAL;
    return this.getPercentage(lower, upper, adjustment);
  }
  getTitle() {
    return "Normal";
  }
}

class Overweight extends BmiCategory {
  calculateGage() {
    const { lower, upper, adjustment } = BMI_BOUNDS.OVERWEIGHT;
    return this.getPercentage(lower, upper, adjustment);
  }
  getTitle() {
    return "Overweight";
  }
}

class Obese extends BmiCategory {
  calculateGage() {
    const { lower, upper, adjustment } = BMI_BOUNDS.OBESE;
    return this.getPercentage(lower, upper, adjustment);
  }
  getTitle() {
    return "Obese";
  }
}

class ExtremelyObese extends BmiCategory {
  calculateGage() {
    const { lower, upper, adjustment } = BMI_BOUNDS.EXTREMELY_OBESE;
    return this.getPercentage(lower, upper, adjustment);
  }
  getTitle() {
    return "Extremely Obese";
  }
}

export { BmiCategory };
