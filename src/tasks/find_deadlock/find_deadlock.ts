import { either, IEither } from '../../core/either'

type ArrGraph = number[][]

export const findDeadlock = (vertices: ArrGraph): IEither<Error | undefined, boolean> => {
    const searched = new Map<number, number>()

    for (let nodeIndex = 0; nodeIndex < vertices.length; nodeIndex += 1) {
        const childNodes = vertices[nodeIndex]
        searched.set(nodeIndex, nodeIndex)

        for (let childNodeIndex = 0; childNodeIndex < childNodes.length; childNodeIndex += 1) {
            const childNode = childNodes[childNodeIndex]

            if (searched.has(childNode) && childNode <= nodeIndex) {
                return either(undefined, true)
            }

            searched.set(childNode, childNode)
        }
    }

    return either(undefined, false)
}
