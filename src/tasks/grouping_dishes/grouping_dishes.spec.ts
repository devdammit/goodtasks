import { groupingDishes } from './grouping_dishes'

describe('Grouping dishes', () => {
    it('should be return an array where each element is alist beginning with the ingredient name', () => {
        const dishes1 = [
            ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
            ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
            ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
            ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese'],
        ]

        const dishes2 = [
            ['Pasta', 'Tomato Sauce', 'Onions', 'Garlic'],
            ['Chicken Curry', 'Chicken', 'Curry Sauce'],
            ['Fried Rice', 'Rice', 'Onions', 'Nuts'],
            ['Salad', 'Spinach', 'Nuts'],
            ['Sandwich', 'Cheese', 'Bread'],
            ['Quesadilla', 'Chicken', 'Cheese'],
        ]

        const result1 = groupingDishes(dishes1)
        const result2 = groupingDishes(dishes2)

        expect(result1.isRight()).toBeTruthy()
        expect(result2.isRight()).toBeTruthy()

        result1.tap({
            right: value =>
                expect(value).toEqual([
                    ['Cheese', 'Quesadilla', 'Sandwich'],
                    ['Salad', 'Salad', 'Sandwich'],
                    ['Sauce', 'Pizza', 'Quesadilla', 'Salad'],
                    ['Tomato', 'Pizza', 'Salad', 'Sandwich'],
                ]),
        })

        result2.tap({
            right: value => {
                expect(value).toEqual([
                    ['Cheese', 'Quesadilla', 'Sandwich'],
                    ['Chicken', 'Chicken Curry', 'Quesadilla'],
                    ['Nuts', 'Fried Rice', 'Salad'],
                    ['Onions', 'Fried Rice', 'Pasta'],
                ])
            },
        })
    })
})
