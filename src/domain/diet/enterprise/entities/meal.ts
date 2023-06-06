import { Entity } from '@/core/entities/entity'
import { UniqueIdentityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface MealProps {
  title: string
  descrpition: string
  createdAt: Date
}

export class Meal extends Entity<MealProps> {
  get title() {
    return this.props.title
  }

  get description() {
    return this.props.descrpition
  }

  get createdAt() {
    return this.props.createdAt
  }

  get excerpt() {
    return this.props.descrpition.substring(0, 60).trimEnd().concat('...')
  }

  static create(
    props: Optional<MealProps, 'createdAt'>,
    id?: UniqueIdentityId,
  ) {
    const meal = new Meal(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return meal
  }
}
