// Function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
    // Initialize an empty array to store the intersection
    const intersection = [];

    // Loop through each element in the first array
    for (let element of arr1) {
        // Check if the element is present in the second array
        if (arr2.includes(element)) {
            // If present, add it to the intersection array
            intersection.push(element);
        }
    }

    return intersection;
}

// Test case
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

console.log("Intersection:", findIntersection(array1, array2));
