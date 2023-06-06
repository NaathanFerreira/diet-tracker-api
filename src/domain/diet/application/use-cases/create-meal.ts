import { Meal } from '../../enterprise/entities/meal'
import { MealsRepository } from '../repositories/meals-repository'

interface CreateMealUseCaseRequest {
  title: string
  descrpition: string
  isOnDiet: boolean
}

interface CreateMealUseCaseResponse {
  meal: Meal
}

export class CreateMealUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    title,
    descrpition,
    isOnDiet,
  }: CreateMealUseCaseRequest): Promise<CreateMealUseCaseResponse> {
    const meal = Meal.create({
      title,
      descrpition,
      isOnDiet,
    })

    await this.mealsRepository.create(meal)

    return { meal }
  }
}
