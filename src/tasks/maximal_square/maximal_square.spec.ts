import { maximalSquare } from './maximal_square'

const matrix2D = [
    ['1', '0', '1', '1', '1'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
    ['1', '0', '0', '1', '0'],
]

describe('Maximal Square', () => {
    it('should be return 1 when provided matrix of 1 element', () => {
        maximalSquare([['1']]).tap({
            left: error => expect(error).toBeUndefined(),
            right: value => expect(value).toBe(1),
        })

        maximalSquare([['0'], ['1']]).tap({
            left: error => expect(error).toBeUndefined(),
            right: value => expect(value).toBe(1),
        })
    })

    it('should be return 9 when provided 2d matrix', () => {
        maximalSquare(matrix2D).tap({
            left: error => expect(error).toBeUndefined(),
            right: value => expect(value).toBe(9),
        })
    })

    it('should be return error when provided not correct matrix', () => {
        const uncorrectMatrix1 = [
            ['1', '1'],
            ['5', '0'],
        ]
        const uncorrectMatrix2 = [['1', '1'], ['0']]

        const result1 = maximalSquare(uncorrectMatrix1)
        const result2 = maximalSquare(uncorrectMatrix2)

        expect(result1.isLeft()).toBeTruthy()
        expect(result2.isLeft()).toBeTruthy()

        const leftCb = (error?: Error) => {
            expect(error).toBeInstanceOf(Error)
            if (error) {
                expect(error.message.length).toBeGreaterThan(1)
            }
        }

        result1.tap({
            left: leftCb,
        })

        result2.tap({
            left: leftCb,
        })
    })
})
