// TODO: WIP
fn main() {
    println!("hello world");
}

pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

struct Solution;

impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut carry = 0;
        let (mut curr1, mut curr2) = (l1, l2);
        let head = Some(Box::new(ListNode { val: 0, next: None }));
        return head;
    }
}
