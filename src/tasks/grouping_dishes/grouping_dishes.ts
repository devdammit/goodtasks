import { either, IEither } from '../../core/either'

export const groupingDishes = (recipes: string[][]): IEither<Error | undefined, string[][]> => {
    const ingredients = new Map<string, string[]>()
    const commonIngredients = new Map<string, string[]>()

    for (let recipeIndex = 0; recipeIndex < recipes.length; recipeIndex += 1) {
        const recipe = recipes[recipeIndex]
        const recipeName = recipe[0]

        for (let ingredientIndex = 1; ingredientIndex < recipe.length; ingredientIndex += 1) {
            const ingredientName = recipe[ingredientIndex]

            if (ingredients.has(ingredientName)) {
                const values = ingredients.get(ingredientName)

                if (values) {
                    const updatedValues = values
                        .concat([recipeName])
                        .sort((a, b) => a.localeCompare(b))

                    commonIngredients.set(ingredientName, updatedValues)
                    ingredients.set(ingredientName, updatedValues)
                }
            } else {
                ingredients.set(ingredientName, [recipeName])
            }
        }
    }

    return either(
        undefined,
        Array.from(commonIngredients)
            .map(([ingredient, recs]) => [ingredient, ...recs])
            .sort((a, b) => a[0].localeCompare(b[0])),
    )
}
