export interface PlayerEntity {
  id: number
  name: string
  surname: string
  teamId: number | null | string
}

export type CreatePlayerDto = Omit<PlayerEntity, 'id'>
