import { randomUUID } from 'crypto'

export class UniqueIdentityId {
  private value: string

  toString() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }
}
