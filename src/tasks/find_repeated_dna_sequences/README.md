# Repeated DNA sequences

All DNA is composed of a series of nucleotides abbreviated as `A`, `C`, `G`, and `T`. In research, it can be useful to identify repeated sequences within DNA.

Write a function to find all the 10-letter sequences (substrings) that occur more than once in a DNA molecule `s`, and return them in [lexicographical order](keyword://lexicographical-order-for-strings). These sequences can overlap.

## Example

For `s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"`, the output should be`repeatedDNASequences(s) = ["AAAAACCCCC", "CCCCCAAAAA"]`.

## Input/Output

- **[execution time limit] 4 seconds (js)**
- **[input] string s**

    *Guaranteed constraints:*`0 ≤ s.length ≤ 5000`.

- **[output] array.string**
    - An array containing all of the potential 10-letter sequences that occur more than once in `s`.



## Self Solution and spec

- [Source file](find_repeated_dna_sequences.ts)
- [Spec](find_repeated_dna_sequences.spec.ts)

