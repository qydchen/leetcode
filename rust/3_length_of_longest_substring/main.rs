use std::cmp;
use std::collections::HashMap;
struct Solution;
impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut longest = 0;
        let mut start = 0;
        let mut map = HashMap::new();
        for (i,c) in s.chars().enumerate() {
            match map.get(&c) {
                Some(&idx) => {
                    if (idx) >= start { // for abba
                        start = idx + 1;
                    }
                },
                None => ()
            }
            longest = cmp::max(longest, i - start + 1);
            map.insert(c,i);
        }
        longest as i32
    }
}

fn main() {
    let input = String::from("abcabcbb");
    assert_eq!(Solution::length_of_longest_substring(input), 3);
    assert_eq!(Solution::length_of_longest_substring(String::from("abba")), 2);
}

// naive, less performant
// struct Solution;
// impl Solution {
//     pub fn length_of_longest_substring(s: String) -> i32 {
//         let mut longest = 0;
//         for i in 0..s.len() {
//             'inner: for j in i + longest + 1..=s.len() {
//                 let mut set = HashSet::new();
//                 let possible_substr = &s[i..j];
//                 for ch in possible_substr.chars() {
//                     if set.contains(&ch) {
//                         break 'inner;
//                     }
//                     set.insert(ch);
//                 }
//                 longest = cmp::max(longest, possible_substr.len());
//             }
//         }
//         longest as i32
//     }
// }
