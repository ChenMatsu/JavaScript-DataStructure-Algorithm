### 01-BigO-Notation (General Trends)

- Objective:
  - What BigO Notaion is?
  - What Logarithm is?
  - BigO Expressions
  - "Time Complexity" and "Space Complexity"
  - Evaluate using BigO Noation
- Concerns:
  - Have a **precise** vocabulary to talk about code performs
  - Useful for discussing **trade-offs** between different approaches
  - Find pain points in applications
---
- What Does Better Mean?
  - Faster? 
  - Less Memory-Intensive?
  - More Readable?
- Problem with Time => Time Complexity
  - Different machines will record different times
  - Same machines will **also** record different times
  - Solution: Determine by **Counting Operations**
---

- BigO Notation
  - BigO Notation is a way to formalize fuzzy counting. It allows us to talk formmlay about algorithm
  - Definition: An algorithm is **O(f(n))** if the number of simple operations has to do is less than f(n)
- BigO Thumb Rules
  - Consts does not matter
    - O(2n) => O(n)
    - O(500) => O(1)
    - O(13n^2) => O(n^2)
    - O(n + 10) => O(n)
    - O(1000n + 50) => O(n)
    - O(n^2 + 5n + 8) => O(n^2)
- BigO Shortcuts
  - Arithmetic operations are constant
  - Variable assignments are constant
  - Accessing elements in array or object is constant
  - Complexity is the length of the loop times the compleixty inside of the loop

---
- Space Complexity(Auxiliary Space Complexity): Use BigO to analyze how much additional memory needed to allocate in order to run 
  - Most Primitives (Boolean, Numbers, undefined, null) are all constant space
  - Strings require O(n) space
  - Reference types are generally O(n)

- Logarithms: a logarithm is the inverse of exponentiation
  - log_2(8) = 3 <=> 2^3 = 8
  - log_2(value) = exponent <=> 2^exponent = value

- Logarithms in Time Complexity
  - Certain Searching Algorithm
  - Effcient Sorting Algorithm
  - Recursions 