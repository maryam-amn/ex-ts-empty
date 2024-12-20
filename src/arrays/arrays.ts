/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
  let arr: number[] = [];

  array.forEach((element) => {
    if (element >= threshold) {
      arr.push(element);
    } else {
    }
  });
  return arr;
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here

  const array2: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= maxLength && array[i].length >= minLength) {
      array2.push(array[i]);
    }
  }
  return array2;
}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
  // Write your code here
  return (string.match(/[a-z]/g) || []).join('');
}
