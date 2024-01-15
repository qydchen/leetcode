use std::collections::HashMap;

fn main() {
    let nums = vec![2, 7, 11, 15];
    let target = 9;
    let result = Solution::two_sum(nums, target);
    
    assert_eq!(result, vec![0, 1]);
  
    let nums2 = vec![3,2,4];
    let target2 = 6;
    let result2 = Solution::two_sum(nums2, target2);
 
    assert_eq!(result2, vec![1, 2]);

    println!("All assertions passed!");
}

struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut targets = HashMap::new();
        let mut i = 0;
        for num in nums {
            match targets.get(&num) {
                Some(&val) => return vec![val as i32, i as i32],
                None => {
                    targets.insert(target - num, i);
                }
            }
            i+=1
        }
        unreachable!();
    }
}
