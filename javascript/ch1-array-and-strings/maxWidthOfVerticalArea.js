const maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const [left, right] = [points[i], points[i + 1]];
    max = Math.max(right[0] - left[0], max);
  }
  return max;
};
