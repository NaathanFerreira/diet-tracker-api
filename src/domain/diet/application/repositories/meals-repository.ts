import { Meal } from '../../enterprise/entities/meal'

export interface MealsRepository {
  create(meal: Meal): Promise<void>
}
