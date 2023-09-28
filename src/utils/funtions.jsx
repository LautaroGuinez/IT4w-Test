export const cleanString = (string) => {
  return string.replace(/[^a-zA-Z0-9]/g, "");
};

export const isAnAnagram = (string1, string2) => {
  return (
    string1.toLowerCase().split("").sort().join("") ===
    string2.toLowerCase().split("").sort().join("")
  );
};
export const convertString = (string) => {
  const lowerCaseInput = string.toLowerCase();

  const charFrequency = {};

  for (let char of lowerCaseInput) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  let result = "";
  for (let char of lowerCaseInput) {
    if (charFrequency[char] === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
};
