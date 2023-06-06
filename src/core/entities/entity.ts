import { UniqueIdentityId } from './unique-entity-id'

export class Entity<PropsType> {
  private _id: UniqueIdentityId
  protected props: PropsType

  get id() {
    return this._id
  }

  constructor(props: PropsType, id?: UniqueIdentityId) {
    this.props = props
    this._id = id ?? new UniqueIdentityId(id)
  }
}
