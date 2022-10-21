/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const index = nums[i] + '';
        map[index] = map[index] || [];
        map[index].push(i);
    }
    // console.log(map);
    for (let i = 0; i < nums.length; i++) {
        const index = (target - nums[i]) + '';
        const second = map[index];
        // console.log({second, index});
        if (second && second.length > 0) {
            const unlikeIndices = second.filter(idx => idx !== i);
            if (unlikeIndices.length > 0)
                return [i, unlikeIndices[0]];
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
