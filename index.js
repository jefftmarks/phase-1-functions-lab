function distanceFromHqInBlocks(block) {
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    const travelDistance = distanceTravelledInFeet(startBlock, endBlock);
    if (travelDistance <= 400) {
        return 0;
    } else if (travelDistance > 400 && travelDistance <= 2000) {
        return (travelDistance - 400) * 0.02;
    } else if (travelDistance > 2000 && travelDistance < 2500) {
        return 25.00;
    } else if (travelDistance > 2500);
        return 'cannot travel that far';
    }