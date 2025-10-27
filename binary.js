const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

export function binarySearch(searchFor, values) {
  console.log(`Searching for ${searchFor}...`);

  let min = 0;
  let max = values.length - 1;
  let middle;
  let found = false;
  let iterations = 0;

  while (min <= max && !found) {
    middle = Math.floor((min + max) / 2);
    iterations++;

    const value = values[middle];
    console.log(`Min: ${min}, Max: ${max}, Mid: ${middle}, Val: ${value}`);

    if (value === searchFor) {
      console.log("Found it!");
      found = true;
    } else if (value < searchFor) {
      console.log("Too low");
      min = middle + 1;
    } else {
      console.log("Too high");
      max = middle - 1;
    }

    console.log(`Iteration: ${iterations}`);
  }

  console.log(
    found
      ? `Found ${searchFor} at index ${middle} after ${iterations} iterations.`
      : `${searchFor} not found after ${iterations} iterations.`
  );

  return {
    found,
    index: found ? middle : -1,
    iterations
  };
}

// Eksempel
const result = binarySearch(35, values);
console.log("Result:", result);
