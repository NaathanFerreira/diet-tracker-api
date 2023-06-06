import { MealsRepository } from '@/domain/diet/application/repositories/meals-repository'
import { Meal } from '@/domain/diet/enterprise/entities/meal'

export class InMemoryMealsRepository implements MealsRepository {
  public items: Meal[] = []

  async create(meal: Meal): Promise<void> {
    this.items.push(meal)
  }
}
