import { findRepeatedDNASequences } from './find_repeated_dna_sequences'

const arg = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'

describe('Find repeated DNA sequences', () => {
    it(`Should be return ["AAAAACCCCC", "CCCCCAAAAA"] when provided ${arg}`, () => {
        findRepeatedDNASequences(arg).tap({
            right: value => expect(value).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']),
        })

        findRepeatedDNASequences('').tap({
            right: value => expect(value).toEqual([]),
        })
    })
})
