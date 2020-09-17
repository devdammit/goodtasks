import { findDeadlock } from './find_deadlock'

describe('Find deadlock', () => {
    it('should returns True if connections describes a graph with a directed cycle, or False otherwise.', () => {
        const graph1 = [[1], [2], [3, 4], [4], [0]]
        const graph2 = [[1, 2, 3], [2, 3], [3], []]
        const graph3 = [[1], [2], [3], [1, 0]]
        const graph4 = [[1], [0]]
        const graph5 = [[1], [2, 3], [3], [4]]

        findDeadlock(graph1).tap({
            right: value => expect(value).toBeTruthy(),
        })

        findDeadlock(graph2).tap({
            right: value => expect(value).toBeFalsy(),
        })

        findDeadlock(graph3).tap({
            right: value => expect(value).toBeTruthy(),
        })

        findDeadlock(graph4).tap({
            right: value => expect(value).toBeTruthy(),
        })

        findDeadlock(graph5).tap({
            right: value => expect(value).toBeFalsy(),
        })
    })
})
