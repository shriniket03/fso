interface Result {
    days: number
    trainingDays: number
    target: number
    average: number
    achieved: boolean
    rating: number
    explanation: string
}

const exerciseCalculator = (arr: number[], target:number): Result => {
    const numDays: number = arr.length
    const trainDays: number = arr.filter(elem=>elem!==0).length
    const average: number = arr.reduce((y,x)=>y+x,0)/arr.length
    const achieved: boolean = average >= target
    const rating: number = (target-average > 0) ? (target-average < -5) ? 3 : 2 : 1 
    const explanation: string = target===3 ? 'good' : target===2 ? 'average' : 'bad'
    return {
        days: numDays, 
        trainingDays: trainDays, 
        target, 
        average,
        achieved, 
        rating, 
        explanation
    }
}

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2))