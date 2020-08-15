const checkStraightLine = function (coordinates) {
    let slope = null;
    for (let i = 0; i < coordinates.length - 2; i += 1) {
        let [curX, curY] = coordinates[i];
        let [nexX, nexY] = coordinates[i + 1];
        const currentSlope = (nexY - curY) / (nexX - curX);
        if (slope === null || slope === currentSlope) {
            slope = currentSlope;
        } else {
            return false
        }
    }
    return true;
};