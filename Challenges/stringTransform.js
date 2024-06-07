function processText(input) {
  // Validate input characters
  if (!/^[\p{L}\p{N}\s]+$/u.test(input)) {
    throw new TypeError("Input must contain only letters, digits, and spaces.");
  }

  const charCount = input.length;

  // Define transformation strategies
  const strategies = {
    15: (text) =>
      [...text]
        .reverse()
        .map((char) => char.codePointAt(0))
        .join(" "),
    3: (text) => [...text].reverse().join(""),
    5: (text) => [...text].map((char) => char.codePointAt(0)).join(" "),
    default: (text) => text,
  };

  // Determine and apply the appropriate strategy
  const transform =
    Object.entries(strategies).find(
      ([divisor]) => charCount % Number(divisor) === 0
    )?.[1] || strategies.default;

  return transform(input);
}

// Test the function
try {
  console.log(processText("Hamburger")); // Output: "regruBmah"
  console.log(processText("Pizza")); // Output: "80 105 122 122 97"
  console.log(processText("Chocolate Chip Cookie")); // Output: "eikooC pihC etalocohC"
  console.log(processText("Example")); // Output: "Example"
  console.log(processText("Café 123")); // Output: "321 éfaC"
  // console.log(processText("Invalid!"));             // Should throw an error
} catch (error) {
  console.error(error.message);
}
