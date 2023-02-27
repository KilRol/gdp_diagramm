import { mergeSort } from "../services/mergeSort";

const normal = (a, b) => a - b;
const reverse = (a, b) => b - a;

const testCases = [
    {
        input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        fn: normal
    },
    {
        input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse(),
        fn: reverse
    },
    {
        input: [1, 6, 2, 46, 8, 1],
        result: [1, 1, 2, 6, 8, 46],
        fn: normal,
    }
];

test('MergeSort should use custom fn for compare array elements', () => {
    const arr = [1, 2, 3];
    console.log(mergeSort(arr, normal));
    expect(mergeSort([1, 2, 3], normal)).toEqual([1, 2, 3]);
    expect(mergeSort([1, 2, 3], reverse)).toEqual([3, 2, 1]);
})

test('MergeSort should sort array', () => {
    testCases.forEach(({ input, result, fn }) => {
        expect(mergeSort(input, fn)).toEqual(result);
    })
});


