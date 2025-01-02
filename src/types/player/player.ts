export interface PlayerEntity {
  id: number
  name: string
  surname: string
  teamId: number | null
}

export type CreatePlayerDto = Omit<PlayerEntity, 'id'>
