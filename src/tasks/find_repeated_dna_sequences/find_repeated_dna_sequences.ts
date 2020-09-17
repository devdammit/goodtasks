import { either, IEither } from '../../core/either'

const SIZE_SEQ = 10

/**
 * Search all the 10-letter suquences (substrings) that occur more than once in a DNA molecule
 * @param str string of series of nucleotides abbreviated as A, C, G and T
 */
export const findRepeatedDNASequences = (str: string): IEither<Error | undefined, string[]> => {
    const seq = new Set<string>()
    const result = new Set<string>()

    for (let i = 0; i <= str.length - SIZE_SEQ; i += 1) {
        const comp = str.substring(i, i + SIZE_SEQ)

        if (seq.has(comp)) {
            result.add(comp)
        } else {
            seq.add(comp)
        }
    }

    return either(undefined, Array.from(result))
}
