import { firstDuplicate } from './first_duplicate'

describe('First duplicate', () => {
    it('should be return first duplicate number for which the second occurrence has the minimal index', () => {
        firstDuplicate([2, 1, 3, 5, 3, 2]).tap({
            right: value => expect(value).toBe(3),
        })

        firstDuplicate([2, 2]).tap({
            right: value => expect(value).toBe(2),
        })
    })

    it('should be return -1 when no such elements', () => {
        const expectedCb = (value: number) => expect(value).toBe(-1)

        firstDuplicate([2, 4, 3, 5, 1]).tap({
            right: expectedCb,
        })

        firstDuplicate([]).tap({
            right: expectedCb,
        })
    })
})
