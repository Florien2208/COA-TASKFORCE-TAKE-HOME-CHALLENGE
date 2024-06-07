function findSubarrayWithTarget(sequence, desiredSum) {
  // Define range limits
  const LOWER_BOUND = -1e9;
  const UPPER_BOUND = 1e9;

  // Validate target sum
  if (desiredSum < LOWER_BOUND || desiredSum > UPPER_BOUND) {
    throw new RangeError("Target sum exceeds valid range.");
  }

  // Validate array elements
  if (
    !sequence.every(
      (element) => LOWER_BOUND <= element && element <= UPPER_BOUND
    )
  ) {
    throw new RangeError("Array contains elements outside valid range.");
  }

  // Initialize prefix sum tracking
  let prefixSum = 0;
  const prefixSumFrequency = { 0: 1 };

  // Iterate through the sequence
  for (const element of sequence) {
    prefixSum += element;

    // Check for subarray with target sum
    if (prefixSumFrequency[prefixSum - desiredSum]) {
      return true;
    }

    // Update prefix sum frequency
    prefixSumFrequency[prefixSum] = (prefixSumFrequency[prefixSum] || 0) + 1;
  }

  // No subarray found
  return false;
}

// Test the function
try {
  const sequence = [4, 2, 7, 1, 9, 5];
  const desiredSum = 17;
  console.log(findSubarrayWithTarget(sequence, desiredSum)); // Output: true
} catch (error) {
  console.error(error.message);
}
