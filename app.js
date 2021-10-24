// Matsu: BigO of Objects(Unordered)
//          Insertion - O(1)
//          Removal - O(1)
//          Searching - O(N)
//          Access - O(1)

//          Object.keys - O(N)
//          Object.values - O(N)
//          Object.entries - O(N)
//          hasOwnProperty - O(1)
let student = {
  firstName: 'Chen',
  lastName: 'Matsu',
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(student.hasOwnProperty('lastName'));

// Matsu: BigO of Arrays(Ordered)
//          Insertion - Depends... Consider from Indexing
//          Removal - Depends...
//          Searching - O(N)
//          Access  - O(1)
//          push / pop - O(1)
//          shift / unshift  - O(N)
//          slice / splice - O(N)
//          concat  - O(N)
//          sort  - O(N * log N)
//          forEach / map / filter / reduce / etc... - O(N)
let names = ["Matsu", "Yuan", "Max", "Jack"];
