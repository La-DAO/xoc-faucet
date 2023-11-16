export default function truncateAddress(str, firstChars=5, lastChars=5) {
  // Check if the string is longer than the sum of firstChars and lastChars
  if (str.length > firstChars + lastChars) {
    // Extract the first and last parts of the string
    const firstPart = str.substring(0, firstChars);
    const lastPart = str.substring(str.length - lastChars);
    
    // Concatenate the parts with '...'
    return `${firstPart}...${lastPart}`;
  }

  // If the string is not longer than the specified length, return it as is
  return str;
}