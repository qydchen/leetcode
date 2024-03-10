// A pivot table is a way to display aggregate or summarized values of an underlying table. A pivot table will typically pick some output column (e.g.
//   number of shirts sold) and aggregate it along several different axes (e.g. date of sale, color of shirt) so that patterns in the overall data can be made apparent.
//   Here's an example. Let's say we have a table that tracks shirt sales:
//   +----------+------------+-------+------+-------------+
//   | Store ID |    Date    | Color | Size | Shirts sold |
//   +----------+------------+-------+------+-------------+
//   | abcd1234 | 2021-05-25 |   red |   XS |           1 |
//   | abcd1234 | 2021-05-25 |  blue |    L |          20 |
//   | abcd1234 | 2021-05-25 | green |    M |         300 |
//   | abcd1234 | 2021-05-26 |   red |   XS |           4 |
//   | abcd1234 | 2021-05-26 | black |    S |          50 |
//   | 5678wxyz | 2021-05-25 |  blue |   XL |         600 |
//   | 5678wxyz | 2021-05-25 | green |    M |           7 |
//   | 5678wxyz | 2021-05-25 | black |    L |          80 |
//   | 5678wxyz | 2021-05-26 |  blue |    S |         900 |
//   | e1f9g2h8 | 2021-05-26 |   red |    S |           1 |
//   | e1f9g2h8 | 2021-05-27 | black |    M |          20 |
//   +----------+------------+-------+------+-------------+
//   We might want to know how many shirts of each color we sold on each day. Here's a pivot table that will tell us that information:
//   +--------------------+------------+------------+------------+
//   | Sum of shirts sold | 2021-05-25 | 2021-05-26 | 2021-05-27 |
//   +--------------------+------------+------------+------------+
//   |                red |          1 |          5 |          0 |
//   |               blue |        620 |        900 |          0 |
//   |              green |        307 |          0 |          0 |
//   |              black |         80 |         50 |         20 |
//   +--------------------+------------+------------+------------+
//   We've chosen to lay out the date on the x axis and the shirt color on t‍‌‌‌‍‍‌‌‌‍‌‍‌‌‌‌‌‍‍‍‍he y axis.
// Each cell is the total number of shirts of that color sold on that day. We ignore all other columns (Store ID, Size).
//
// Your task is to implement a function that takes in a normal table and a specification of how
// the pivot table should be constructed and returns the resulting pivot table. For this first part, let's
// assume that a pivot table specification includes the name of the column to be aggregated, the name of the
//  column to use for the x axis, and the name of the column to use for the y axis.

class Pivot {}
