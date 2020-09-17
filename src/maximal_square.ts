import { either, IEither } from './core/either'

type Matrix2D = string[][]

/**
 * Flag utility function for determinate value cell
 * @param cell - 0 or 1
 * @returns true or false
 */
function isPositiveCell(cell: string): boolean {
    return !!+cell
}

/**
 * Search max square in matrix
 * @param matrix2D - 2D binary matrix
 * @returns An integer that represents the area of the largest square in the given matrix that is composed only of 1s.
 */
export const maximalSquare = (matrix2D: Matrix2D): IEither<Error | undefined, number> => {
    if (!Array.isArray(matrix2D)) {
        return either(new Error('argument matrix2D is not array'))
    }

    const rows = matrix2D.length
    const cols = matrix2D[0].length

    let maxSquareLength = 0

    for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
        for (let colIndex = 0; colIndex < cols; colIndex += 1) {
            const cell = matrix2D[rowIndex][colIndex]

            if (typeof cell !== 'string' || +cell > 1) {
                return either(
                    new Error(
                        `argument matrix2D is not correct matrix. Position [${rowIndex}, ${colIndex}]`,
                    ),
                )
            }

            if (isPositiveCell(cell)) {
                let squareLength = 1
                let isSquare = true

                while (
                    squareLength + rowIndex < rows &&
                    squareLength + colIndex < cols &&
                    isSquare
                ) {
                    for (let i = colIndex; i <= squareLength + colIndex; i += 1) {
                        if (!isPositiveCell(matrix2D[rowIndex + squareLength][i])) {
                            isSquare = false
                            break
                        }
                    }

                    for (let i = rowIndex; i <= squareLength + rowIndex; i += 1) {
                        if (!isPositiveCell(matrix2D[i][colIndex + squareLength])) {
                            isSquare = false
                            break
                        }
                    }

                    if (isSquare) {
                        squareLength += 1
                    }
                }

                if (maxSquareLength < squareLength) {
                    maxSquareLength = squareLength
                }
            }
        }
    }

    return either(undefined, maxSquareLength * maxSquareLength)
}

export default maximalSquare
