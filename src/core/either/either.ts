import { IEither, IEitherPattern } from './either.interface'

export class Either<L, R> implements IEither<L, R> {
    constructor(private readonly left?: L, private readonly right?: R) {
        if (this.neitherExist()) {
            throw new TypeError('Either requires a left or a right')
        }

        if (this.bothExist()) {
            throw new TypeError('Either cannot have both a left and a right')
        }
    }

    public isRight(): boolean {
        return Either.exists(this.right)
    }

    public isLeft(): boolean {
        return Either.exists(this.left)
    }

    public match<T>(pattern: IEitherPattern<L, R, T>): T {
        return this.isRight() ? pattern.right(this.right as R) : pattern.left(this.left as L)
    }

    public tap<T>(pattern: Partial<IEitherPattern<L, R, T>>) {
        return this.isRight()
            ? (typeof pattern.right === 'function' && pattern.right(this.right as R)) || undefined
            : (typeof pattern.left === 'function' && pattern.left(this.left as L)) || undefined
    }

    public flatMap<T>(fn: (r: R) => IEither<L, T>): IEither<L, T> {
        return this.isRight() ? fn(this.right as R) : new Either<L, T>(this.left)
    }

    public map<T>(fn: (r: R) => T): IEither<L, T> {
        return this.isRight()
            ? new Either<L, T>(undefined, fn(this.right as R))
            : new Either<L, T>(this.left)
    }

    private static exists<T>(value?: T): boolean {
        return typeof value !== 'undefined' && value !== null
    }

    private neitherExist(): boolean {
        return !this.isLeft() && !this.isRight()
    }

    private bothExist(): boolean {
        return this.isLeft() && this.isRight()
    }
}
