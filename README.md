# Good tasks for interview on JavaScript 
Here are some good tasks that I have met on the Internet or in interviews. For a long time, I didn't create a repository to collect such tasks and show my solutions. Some of the tasks are already exist on [Codewars](www.codewars.com) or [Leetcode](www.leetcode.com), here is my own selection of tasks.



## Used Practice

- [Either monade for error handling](https://blog.logrocket.com/elegant-error-handling-with-the-javascript-either-monad-76c7ae4924a1/)
- [TDD process](https://en.wikipedia.org/wiki/Test-driven_development)



## Tasks
All tasks divided by subjective level of complexity from 1 to 10

| Task | Description | Level of complexity |
| ---- | ----------- | ------------------- |
| [maximalSquare](src/tasks/maximal_square/maximal_square.ts) | You have a 2D binary matrix that's filled with `0`s and `1`s. In the matrix, find the largest square that contains only `1`s and return its area. | 5 |
| [firstDuplicate](src/tasks/first_duplicate/first_duplicate.ts) | Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. | 2 | 
| [findDeadlock](src/tasks/find_deadlock/README.md) | Write a function that returns True if connections describes a graph with a directed cycle, or False otherwise. | 6 |
| [findRepeatedDNASequences](src/tasks/find_repeated_dna_sequences/README.md) | Write a function to find all the 10-letter sequences (substrings) that occur more than once in a DNA molecule `s`, and return them in [lexicographical order](keyword://lexicographical-order-for-strings). These sequences can overlap. | 4 |
| [groupingDishes](src/tasks/grouping_dishes/README.md) | Return an array where each element is a list beginning with the ingredient name, followed by the names of all the dishes that contain this ingredient. The dishes inside each list should be sorted [lexicographically](keyword://lexicographical-order-for-strings), and the result array should be sorted [lexicographically](keyword://lexicographical-order-for-strings) by the names of the ingredients. | 4 |


 

## Books or platforms that will help

Platforms:
- [Codewars](www.codewars.com)
- [Leetcode](www.leetcode.com)

Books:
- [Grokking algorithms](https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230)
- [Algorithms](https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X/ref=pd_rhf_dp_s_pd_crcd_0_3/146-3949919-6944016?_encoding=UTF8&pd_rd_i=032157351X&pd_rd_r=a36e7f66-db59-4913-8282-fae86ea77207&pd_rd_w=Xd8LG&pd_rd_wg=JfCwT&pf_rd_p=943fed14-cf77-4e30-ab5d-881934acd4a9&pf_rd_r=XXR7JGJJZXKBSHMB8DQ1&psc=1&refRID=XXR7JGJJZXKBSHMB8DQ1)


## How setup
[Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) are required to continue setup.

_Note:_
_The best alternative [npm](https://www.npmjs.com/get-npm) is [yarn](https://yarnpkg.com/)._
_I use yarn because yarn supoorts workspaces, which i use in most of my projects._


**First step**

Execute in console `yarn` or `npm install`

**Run tests**

_Default mode:_ Execute in console `yarn test` or `npm run test`

_Watch mode:_ Execute in console `yarn test:watch` or `npm run test:watch`





## TLDR

My solutions do not claim to be perfect implementation. I will be glad if you give your opinion on the best solution or add your interesting task(s)

