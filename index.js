// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    return Math.abs(location - hqLocation);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}


console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start);
    return distance * feetPerBlock;
}


console.log(distanceTravelledInFeet(34, 38));

function calculatesFarePrice(start, destination) {
    const feetTraveled = Math.abs(destination - start) * 264;

    if (feetTraveled <= 264) {
        return 0;
    }
    else if (feetTraveled > 264 && feetTraveled <= 2000) {
        return (feetTraveled - 400) * 0.02;
    }
    else if (feetTraveled > 2000 && feetTraveled <= 2500) {
        return 25;
    }
    else if (feetTraveled > 2500) {
        return 'cannot travel that far';
    }
}

