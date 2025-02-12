export interface TeamEntity {
  id: string
  name: string
  since: number | null
  location: string
}

export type TeamDto = Omit<TeamEntity, 'id'>
