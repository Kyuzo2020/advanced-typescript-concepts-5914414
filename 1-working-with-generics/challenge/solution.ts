// Create a type-safe, generic sorting function for an array of objects 
// based on a property key of the object provided at runtime.
 
// The function must maintain type safety for property keys.

// Complete this function
// function sortArray<T extends { id: number}>(array: T[], id: string): T[] {
//   array.sort((a,b) => a.id - b.id);
//   return array;
// }

//  CORRECT SOLUTION
function sortArray<T, K extends keyof T>(array: T[], key: K): T[] {
  array.sort((a,b) => (a[key] > b[key]) ? -1 : 1);
  return array;
}
// Test your sorting function with the following array
let tasks = [{ id: 3, title: "Contact Sales" }, { id: 2, title: "Write Code" }, { id: 1, title: "Compile" }];
let sortedTasks = sortArray(tasks, "id");
console.log(sortedTasks);  

//  execute this script in the terminal:
// node /workspaces/advanced-typescript-concepts-5914414/1-working-with-generics/challenge/solution.ts