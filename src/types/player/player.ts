export interface PlayerEntity {
  id: string
  name: string
  surname: string
  teamId: string | null
}

export type PlayerDto = Omit<PlayerEntity, 'id'>

export type UpdateTeamPlayerDto = Pick<PlayerEntity, 'teamId'>
