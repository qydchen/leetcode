const a1 = [2, 3, 1, 1, 4];
const a2 = [3, 2, 1, 0, 4];

function steps(arr) {
    const variousSteps = new Array(arr.length).fill(0);
    let i = 0;
    while (i < arr.length) {
        let currentJump = arr[i];
        for (let j = 1; j <= currentJump; j++) {
            if (j + i < variousSteps.length) {
                variousSteps[j + i] += 1;
            }
        }
        if (variousSteps[variousSteps.length - 1] !== 0) {
            return true;
        }
        i++;
    }
    return false;
}

console.log(steps(a1));
console.log(steps(a2));
