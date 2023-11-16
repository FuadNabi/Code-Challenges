Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]<br>
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]<br>
Example 2:<br>
<br>
Input: strs = [""]<br>
Output: [[""]]<br>
Example 3:<br>
<br>
Input: strs = ["a"]<br>
Output: [["a"]]<br>
<br>
<br>
Constraints:<br>
<br>
1 <= strs.length <= 104<br>
0 <= strs[i].length <= 100<br>
strs[i] consists of lowercase English letters.<br>
