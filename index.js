function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42
    return Math.abs(someValue - hqLocation)
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue)
    const feetPerBlock = 264
    return blocks * feetPerBlock
}

function distanceTravelledInFeet(start, destination) {
    const difference = Math.abs(start - destination)
    return difference * 264
}
distanceTravelledInFeet(42, 43)


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } if (distance > 400 && distance <= 2000) {
        const pricePerFoot = 0.02
        const minusFreeFeet = distance - 400
        return pricePerFoot * minusFreeFeet
    } if (distance > 2000 && distance <= 2500) {
        return 25
    } if (distance > 2500) {
        return 'cannot travel that far'
    }
    
}