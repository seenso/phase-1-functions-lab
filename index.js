// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(street) {
  const blockLength = 264;
  return Math.abs((street - 42) * blockLength);
};

distanceTravelledInFeet = (start, end) => {
  const blockLength = 264;
  return Math.abs((end - start) * blockLength);
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance <= 2500) {
    return 25.00 * (distance - 2000);
  } else {
    return 'cannot travel that far';
  }
};