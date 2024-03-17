// Function to find the maximum sum of a subarray
function maxSubarraySum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test cases
const arrays = [
    [-2, 1, -3, 4, -1, 2, 1, -5, 4], // Expected output: 6 (the subarray [4,-1,2,1] has the maximum sum)
    [1, 2, 3, 4, 5], // Expected output: 15 (the entire array has the maximum sum)
    [-2, -3, 4, -1, -2, 1, 5, -3] // Expected output: 7 (the subarray [4,-1,-2,1,5] has the maximum sum)
];

// Find and display the maximum sum for each array
arrays.forEach(arr => {
    console.log("Array:", arr);
    console.log("Maximum sum of subarray:", maxSubarraySum(arr));
    console.log("---");
});
