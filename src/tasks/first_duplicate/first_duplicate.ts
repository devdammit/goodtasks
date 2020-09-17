import { either, IEither } from '../../core/either'

/**
 * Search first duplicate.
 * @example firstDuplicate([2, 1, 3, 5, 3, 2]) -> 3
 * @param arr array of numbers
 * @returns number of first duplicate
 */
export const firstDuplicate = (arr: number[]): IEither<Error | undefined, number> => {
    const dict = {} as Record<number, number>

    for (let i = 0; i < arr.length; i += 1) {
        const el = arr[i]

        if (typeof dict[el] !== 'undefined') {
            return either(undefined, el)
        }

        dict[el] = i
    }

    return either(undefined, -1)
}
