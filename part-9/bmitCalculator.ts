const calculateBMI = (height: number, weight: number): String => {
    const BMI: number = weight/(height/100*height/100)
    if (BMI < 27 && BMI > 20) {
        return "Normal Range"
    }
    else if (BMI > 27) {
        return "Overweight"
    }
    else if (BMI < 20) {
        return "Underweight"
    }

}

console.log(calculateBMI(Number(process.argv[2]), Number(process.argv[3])))