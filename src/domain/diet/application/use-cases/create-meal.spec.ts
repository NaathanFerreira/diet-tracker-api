import { InMemoryMealsRepository } from 'test/repositories/in-memory-meals-repository'
import { CreateMealUseCase } from './create-meal'

let inMemoryMealsRepository: InMemoryMealsRepository
let sut: CreateMealUseCase

describe('Create Meal Use Case', () => {
  beforeEach(() => {
    inMemoryMealsRepository = new InMemoryMealsRepository()
    sut = new CreateMealUseCase(inMemoryMealsRepository)
  })

  it('should be able do create a meal', async () => {
    const { meal } = await sut.execute({
      title: 'New meal',
      descrpition: 'new meal description',
      isOnDiet: true,
    })

    expect(meal.id.toString()).toEqual(expect.any(String))
    expect(meal.title).toEqual('New meal')
  })
})
