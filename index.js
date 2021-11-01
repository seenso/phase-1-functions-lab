// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(street) {
  const blockLength = 264;
  return Math.abs((street - 42) * blockLength);
}