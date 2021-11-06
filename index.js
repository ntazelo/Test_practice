

export default function stringLength(str) {
    const car = str.split('')

    
    if(str.length >= 1 && str.length <= 10) {
        return {car : car.length , range : true }
    }
    return {car : car.length , range : false }

}
