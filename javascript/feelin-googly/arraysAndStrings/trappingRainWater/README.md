# Trapping Rain Water

It's easy for us to draw the picture of the water trapped, but it is difficult to code the relationship of the water with respect to the bars.

General strategy
- For each bar => get amount of water it can trap
- Sum up total amount of water traooed by each bar

What's the relationship between each bar and the amount of water it can hold?

- For each bar, the amount of water is dependent on the minimum of the left highest bar and right highest

Formula to calculate water amount for a bar = `Math.min(leftHighest, rightHighest) - barHeight`

1. get leftHighest to each bar
2. compare with highest with leftHighest
