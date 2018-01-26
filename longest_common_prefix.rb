def longest_common_prefix(strs)
  return "" if strs.empty?
  s1, s2 = strs.min, strs.max
  s1.each_char.with_index do |c, i|
    return s1[0...i] if c != s2[i]
  end
end

p longest_common_prefix([]) # ''
p longest_common_prefix(['']) # ''
p longest_common_prefix(['a']) # 'a'
p longest_common_prefix(['a', 'b']) # ''
p longest_common_prefix(['panda', 'pancakes', 'pandemonium']) # 'pan'
